import path from 'path'

import { Directory, Project, SourceFile } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const sourceFiles = project.getSourceFiles()

const uiPath = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui')
const sharedUIDirectory = project.getDirectory(uiPath)
const uiDirectories = sharedUIDirectory?.getDirectories()

const isPublicApiExists = (directory: Directory) => {
    return directory.getSourceFiles().some(file => file.getBaseName() === 'index.ts')
}

const getComponentFile = (directory: Directory): SourceFile | null => {
    for (const file of directory.getSourceFiles()) {
        if (file.getBaseName() === `${directory.getBaseName()}.tsx`) {
            return file
        }
    }
    return null
}

const createSourceCodeForIndex = (exportNames: string[], dirname: string) => {
    return `export { ${exportNames.join(', ')} } from './${dirname}'`
}

const isPathRelative = (path: string) => path.startsWith('./') || path.startsWith('../')

const isImportFromSharedUI = (path: string) => path.match(/shared\/ui/i)

uiDirectories?.forEach(dir => {
    if (!isPublicApiExists(dir)) {
        const componentFile = getComponentFile(dir)

        let typescriptExportStatements
        if (componentFile) {
            typescriptExportStatements = [
                ...componentFile.getEnums(),
                ...componentFile.getInterfaces(),
                ...componentFile.getTypeAliases()
            ].filter(statement => statement.isExported())
        }

        const exportStatements = componentFile?.getVariableStatements()
            .filter(statement => statement.isExported())

        const exportNames: string[] = []

        exportStatements?.forEach(statement => {
            statement.getDeclarations().forEach(declaration => {
                exportNames.push(declaration.getName())
            })
        })
        typescriptExportStatements?.forEach(statement => exportNames.push(statement.getName()))

        const sourceFile = dir.createSourceFile('index.ts', createSourceCodeForIndex(exportNames, dir.getBaseName()))
        void sourceFile.save()
    }
})

sourceFiles.forEach(sourceFile => {
    sourceFile.getImportDeclarations().forEach(importDeclaration => {
        const importValue = importDeclaration.getModuleSpecifierValue().replace('@/', '')
        const importValueArr = importValue.split('/')
        if (!isPathRelative(importValue) && importValueArr.length === 4 && isImportFromSharedUI(importValue)) {
            const newImportValue = importValueArr.slice(0, 3).join('/')
            importDeclaration.setModuleSpecifier('@/' + newImportValue)
        }
    })
    void sourceFile.save()
})
