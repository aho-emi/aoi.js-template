module.exports = async d => {
const data = d.util.aoiFunc(d);
const [parameter, optParameter= "715852000096419900" || d.author.id ] = data.inside.splits

  
text = `Example You say? ${parameter}, You got it right? <@${optParameter}>`

data.result = text

return { code: d.util.setCode(data) }
}
