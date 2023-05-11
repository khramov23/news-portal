import { Project } from 'ts-morph'

const project = new Project()

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const sourceFiles = project.getSourceFiles()

const availableDirectories = ['app', 'pages', 'widgets', 'features', 'entities', 'shared']

const needAlias = (moduleName: string) => {
    return availableDirectories.some(directory => moduleName.startsWith(directory))
}

sourceFiles.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations()
    importDeclarations.forEach(importDecl => {
        const moduleName = importDecl.getModuleSpecifierValue()
        if (needAlias(moduleName)) {
            importDecl.setModuleSpecifier('@/' + moduleName)
        }
    })
})

project.save().then(() => { console.log('Successfully done') })
