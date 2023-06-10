module.exports=[{
  name: "selectMenu",
  code:`
  This is a select menu!
  
  $addSelectMenu[1;selectMenu;Place Holder!;1;1;false;Option A:Description of option A:optionA:false;Option B:Description of option B:optipnB:false]
  ` // Everyone can use this menu
},{
  name: "selectMenuAuthor",
  code:`
  This is a author select menu!
  
  $addSelectMenu[1;selectMenuAuthor;Place Holder!;1;1;false;Option A:Description of option A:optionA.$authorID:false;Option B:Description of option B:optipnB.$authorID:false]

  ` // This is author only select menu
}]
