import * as articleCommands from './commands/article'
import * as commentCommands from './commands/comment'
import * as commonCommands from './commands/common'
import * as profileCommands from './commands/profile'

Cypress.Commands.addAll(commonCommands)
Cypress.Commands.addAll(profileCommands)
Cypress.Commands.addAll(articleCommands)
Cypress.Commands.addAll(commentCommands)
