//========== STRUCTURE DATA
const BaseInteraction = require("./BaseInteraction.js")
const Constants =  require("./../util/constants.js")
const { OptionType } = require("./../util/constants.js")

//========== CLASS
class ChatInputInteraction extends BaseInteraction {
  constructor(options, client) {
    super()
    
    this.client = client || null;
    
    var daneta = JSON.parse(JSON.stringify(options))
    //this.rawdata = options
    this.name = daneta?.data?.name || null
    this.description = daneta?.data?.description || null
    this.locale = daneta?.locale || null
    this.guildLocale = daneta?.guild_locale || null
    this.guildId = daneta?.guild_id || null
    this.channelId = daneta?.channel_id || null
    this.authorId = daneta?.member?.user?.id || null
    this.options = daneta?.data?.options || []
    this.token = daneta?.token || null
    this.id = daneta?.id || null
  }
  
  reply(msgdata) {
    this.client.requestAPI("POST", Constants.ENDPOINTS.RESPOND_INTERACTION(this.id, this.token), {
      type:4,
      data:msgdata
    })
  }
  
  deferReply() {
    this.client.requestAPI("POST", Constants.ENDPOINTS.RESPOND_INTERACTION(this.id, this.token), {
      type:5
    })
  }
  
  followUp(msgdata) {
    this.client.requestAPI("POST", Constants.ENDPOINTS.FOLLOWUP_INTERACTION(this.client.user.id, this.token), msgdata)
  }
  
  editReply(msgdata) {
    this.client.requestAPI("PATCH", Constants.ENDPOINTS.EDIT_INTERACTION(this.client.user.id, this.token), msgdata)
  }
  
  showModal(modaldata) {
    this.client.requestAPI("POST", Constants.ENDPOINTS.RESPOND_INTERACTION(this.id, this.token), {
      type:9,
      data:modaldata
    })
  }
  
  getSubcommandGroup(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.SUB_COMMAND_GROUP))?.name || null
  }
  
  getSubcommand(key, required = true) {
    return this.options.find(x => (x.name === key && x.type === OptionType.SUB_COMMAND))?.name || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.SUB_COMMAND))?.name || null
  }
  
  getString(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.STRING))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.STRING))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.STRING))?.value || null
  }
  
  getNumber(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.NUMBER))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.NUMBER))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.NUMBER))?.value || null
  }
  
  getBoolean(key, required = false) {
  return this.options.find(x => (x.name === key && x.type === OptionType.BOOLEAN))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.BOOLEAN))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.BOOLEAN))?.value || null
  }
  
  getInteger(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.INTEGER))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.INTEGER))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.INTEGER))?.value || null
  }
  
  getAttachment(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.ATTACHMENT))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.ATTACHMENT))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.ATTACHMENT))?.value || null
  }
  
  getChannel(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.CHANNEL))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.CHANNEL))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.CHANNEL))?.value || null
  }
  
  getUser(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.USER))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.USER))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.USER))?.value || null
  }
  
  getMentionable(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.MENTIONABLE))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.MENTIONABLE))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.MENTIONABLE))?.value || null
  }
  
  getRole(key, required = false) {
    return this.options.find(x => (x.name === key && x.type === OptionType.ROLE))?.value || this.options[0]?.options.find(x => (x.name === key && x.type === OptionType.ROLE))?.value || this.options[0]?.options[0]?.options.find(x => (x.name === key && x.type === OptionType.ROLE))?.value || null
  }
}

module.exports = ChatInputInteraction
