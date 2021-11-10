//array to store messages
var messages = [];

//message type lookup object. similar to enum.
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};

//see data
var data = [
    {
        type: messageType.out,
        user: 'Pam',
        message: 'Hey, do you have lunch plans?'
    },
    {
        type: messageType.in,
        user: 'Joe',
        message: 'Hi Pam! No, how about Tacos?'
    },
    {
        type: messageType.out,
        user: 'Pam',
        message: "Ok, Let's go!"
    }
];

//message constructor function... will create a constructor that is the same as the format above
function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
};

//function to create and return an element for the supplied message
function createMessageElement(message) {
    //create text element for the message
    var messageText = document.createTextNode(
        message.user + ': ' + message.message);

    //create the element and add the message text
    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    //add a class using the message type
    messageEl.className = message.type;

    return messageEl;
}

//button click event handler to add a new message- don't add it inline
function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');
    
    //determine message type and set messgae variables accordingly. (for future)
    switch (event.target.id) {
        case 'send-button':
            user = 'Pam';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Joe'
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
            break;
    };

    //create new message
    if (messageInput.value != '') {
        //construct a message and add it to the array
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        //create a message element
        var el= createMessageElement(message);

        //add the message element to the Dom
        messagesContainerEl.appendChild(el);

        //reset input- clear it out so the user doesn't have to themselves
        messageInput.value = '';
    }
}

    //load seed data from data array (loop through all the items. first starts with 0, then 1, 2 etc)
    function loadSeedData() {
        for (var i = 0; i < data.length;i++) {
            var item = data[i];
            var message = new Message(item.type, item.user, item.message);
            messages.push(message);
        }

        //load view with pre-loaded messages
        var messagesContainerEl = document.getElementById('message-container')

        for (var i = 0; i < messages.length; i++) {
            var message = messages[i];
            var el = createMessageElement(message)

            messagesContainerEl.appendChild(el);
        }
    }
    //if we were actually calling the handler we would add the parenthesis but we are just naming it, reference to button adding noclick value
    var init = function() {
        document.getElementById('send-button').onclick = addMessageHandler;
        document.getElementById('reply-button').onclick = addMessageHandler;

        //load seed data from data array
        loadSeedData();
    }

    //once it gets here it will actually be able to kick it off
    init();
