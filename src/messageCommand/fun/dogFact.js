module.exports={
  name: "dogfact",
  description: "Shows random fact about dog.",
  code:`

$title[Dog Fact]
$addField[Here is a dog fact!;$jsonRequest[http://dogapi.dog/api/v2/facts;data[0].attributes.body]]
$footer[Requested by $username]
$color[Random]


  `
}
