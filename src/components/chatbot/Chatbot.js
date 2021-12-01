import chatbot from "./chatbot.css"

export const ChatBot = () => {
    return (
        <>
        <div onload="start()">

            <div id="main">
                <h2>ChatBot</h2>

                <div id="msg_area">
                    <div id="robot">
                        <div id="bot"></div>
                        <h3>Hey!, I am Coco</h3>
                    </div>
                </div>

            <div id="input">
                <input type="text" placeholder="New Message" id="text"/>
            </div>

        </div><src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.24.0/axios.min.js" integrity="sha512-u9akINsQsAkG9xjc1cnGF4zw5TFDwkxuc9vUp5dltDWYCSmyd0meygbvgXrlc/z7/o4a19Fb5V0OUE58J7dcyw==" crossorigin="anonymous" referrerpolicy="no-referrer"/</div>>
        
    </body>

    </>

    <script type="text/javascript">

        function start() {
            
            let res_msg = document.createElement('div');
            res_msg.innerHTML = "Hello everyone, I am Coco. How can I help you?"; 
            res_msg.setAttribute("class", "left");

            document.getElementById('msg_area').appendChild(
                res_msg);
        }
            document.getElementById('send').addEventListener("click", async (e)=>{
                e.preventDefault();

                var req = document.getElementById('text').value;

                if (req == undefined || req == ""){

                }

                else{

                    let res = "";

                    await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
                        res = JSON.stringify(data.data.response)
                    })

                    let msg_req = document.createElement('div');
                    let msg_res = document.createElement('div');

                    let Con1 = document.createElement('div');
                    let Con2 = document.createElement('div');

                    Con1.setAttribute("class", "msgCon1");
                    Con2.setAttribute("class", "msgCon2");

                    msg_req.innerHTML = req;
                    msg_res.innerHTML = res;

                    msg_req.setAttribute("class", "right");
                    msg_res.setAttribute("class", "left");

                    let message = document.getElementById('msg_area');

                    message.appendChild(Con1);
                    message.appendChild(Con2);

                    Con1.appendChild(msg_req);
                    Con2.appendChild(msg_res);

                    document.getElementById('text').value="";

                    function scroll() {
                        var scrollMsg = document.getElementById('msg_area');
                        scrollMsg.scrollTop = scrollMsg.scrollHeight;
                    }
                    scroll();
                }

            });

    </script>
)}