# RecurringModal
Do you want to completely ruin the user experience? Are you interested in irritating potential customers to the point they will never do business with you again? Or maybe you just want to make it impossible for your site content to be read without interruption? If you answered yes to any of these questions, this is the script for you!

Companies commonly employ this tactic to provide a contact form for the user to sign up for a newsletter or ask questions. This is a simple JavaScript/jQuery script using browser local storage that, when attached to a modal, will cause the modal to show up after a user has been on your site for 30 seconds.

Then, if they have closed the modal without filling it out (does anyone actually fill it out?), the timer restarts, and the modal will show up again after 2 minutes. Then, if they again close the modal without filling it out, the timer restarts a final time, and the modal will show up again 5 minutes later. At that point, if they close the modal, and as long as the user never clears their local storage on that browser, they will never have to see the modal again!

If the user is completely insane and actually fills out the contact form successfully, I have it attached to a success indicator which will prevent the modal from showing up again.

I also included a function for a "Do Not Show Again" button which sets the close count to 3 so the modal will never show again. This is best for everyone involved and I encourage you to use it.

I wrote this awhile ago, but it's functional. If I ever get the nerve to revisit it, I look forward to redoing it with ES6 syntax, which will make it much cleaner. For now, it is my great shame that I am sharing with the world: my beautiful demon child, Recurring Contact Modal.
