const Client = require("./src/client/Client.js")
const Constants = require('./src/util/constants.js')
const Collection = require('./src/util/Collection.js')
module.exports = {
  Client: Client,
  Embed: require('clorynin').Embed,
  ActionRow: require('clorynin').ActionRow,
  Modal: require('clorynin').Modal,
  SelectMenu: require('clorynin').SelectMenu,
  Button: require('clorynin').Button,
  TextInput: require('clorynin').TextInput,
  Command: require('clorynin').Command,
  Collection:Collection,
  Resolver: {
    CommandOptionType: require('clorynin').CommandOptionType,
    CommandPermissionType: require('clorynin').CommandPermissionType,
    CommandType: require('clorynin').CommandType,
    ButtonStyle: require('clorynin').ButtonStyle,
    TextInputStyle: require('clorynin').TextInputStyle,
    ResolveColor: require('clorynin').ResolveColor
  }
}
