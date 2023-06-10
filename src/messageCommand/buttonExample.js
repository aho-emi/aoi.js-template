module.exports=[{
  name: "button",
  code:`
  This is a button.
  $addButton[1;Click Me!;secondary;button;false]
  
` // This is normal button.
},{
  name: "authorButton",
  code:`
  This is a author only button.
  $addButton[1;Click Me!;secondary;authorButton.$authorID;false]
  
` // This is normal button.
}]

// You can use the interaction code in same file or in interaction folder //
