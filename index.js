let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let chatContainer = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");
let sendBtn = document.getElementById("sendMsgBtn");


sendBtn.onclick = function() {
    let usermsg = userInputEl.value;
    let msgToBotContainer = document.createElement("div");
    msgToBotContainer.classList.add("msg-to-chatbot-container");
    let msgToBot = document.createElement("span");
    msgToBot.classList.add("msg-to-chatbot");
    msgToBot.textContent = usermsg;
    msgToBotContainer.appendChild(msgToBot);
    chatContainer.appendChild(msgToBotContainer);

    let msgfromBotContainer = document.createElement("div");
    msgfromBotContainer.classList.add('msg-from-chatbot-container');
    let msgfromBot = document.createElement("span");
    msgfromBot.classList.add("msg-from-chatbot");
    let noOfChatbotMsgs = chatbotMsgList.length;
    let index = Math.ceil(Math.random() * noOfChatbotMsgs) - 1;
    msgfromBot.textContent = chatbotMsgList[index];
    msgfromBotContainer.appendChild(msgfromBot);
    chatContainer.appendChild(msgfromBotContainer);
    index = index + 1;



    userInputEl.value = "";

}
