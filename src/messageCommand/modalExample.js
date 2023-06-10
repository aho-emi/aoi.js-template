module.exports=[{
  name: "interactionModal",
  code: `
  
$addButton[1;Press Me!;primary;modal;false]
Pretty Example!

`
  // // Create a button which will trigger the modal.

},{
  name: "modal",
  type: "interaction",
  prototype: "button", // Using "prototype" as this interaction belongs to a button.
  code:`

  $interactionModal[Modal;modalID;{actionRow:
    {textInput:What's your name?:1:nameInput:true:Your pretty name!:2:200}
  }
  {actionRow:
    {textInput:What's your age?:1:ageInput:true:You young soul!:1:3}
  }]
`
  /* The modal itself, we use {textInput} to accept user input.

The correct usage of {textInput} would be:

{textInput:title:type (1 : small text field, 2 : big text field):customID:required ( true, false ):placeholder:minVal:maxVal}

*/
},{
  name: "modal",
  type: "interaction",
  prototype: "modal", // Using "prototype" as this interaction belongs to a modal.
  code: `
$interactionReply[Thanks for submitting this form!;;;;everyone;true]

$title[$username submitted a form!;$userAvatar]
$addField[Their name is..;$textInputValue[nameInput]]
$addField[Their age is..;$textInputValue[ageInput]]
`
  // Using $textInputValue you can retrieve the input value from earlier modal
}]
