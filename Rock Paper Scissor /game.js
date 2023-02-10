const { Component , mount ,useEnv, xml } = owl;
const choices=['Rock','Paper','Scissor'];
var user_scores=0,computer_score=0;
class Counter extends Component{
    static template = xml`    
    <div class="Scores">
        <p>Computer : 
            <span id="computer_score">0</span>
        </p>
        <p>
            You :
            <span id="user_scores">0</span>
        </p>
    </div>
    `;
}

class Status extends Component{
    static template = xml`
    <div class="center">
        <h2 id="status"></h2>
    </div>
    `;
}

class Button extends Component{
    static template = xml`
    <div class="center">
        <button t-on-click="playgame" class="btn danger" id="Rock">Rock</button>
        <button t-on-click="playgame" class="btn success" id="Paper">Paper</button>
        <button t-on-click="playgame" class="btn warning" id="Scissor">Scissor</button>
    </div>
    `;
    playgame(a)
    {
        let user_choice=a.target.id;
        let computer_choice=Math.floor(Math.random() * choices.length); 
        if(choices[computer_choice]=='Rock' && user_choice=="Rock" || choices[computer_choice]=='Paper' && user_choice=="Paper" || choices[computer_choice]=='Scissor' && user_choice=="Scissor"  )
        {
            document.getElementById("status").textContent="Draw";
        }
        else if (choices[computer_choice]=='Paper' && user_choice=="Rock" || choices[computer_choice]=='Rock' && user_choice=="Scissor" || choices[computer_choice]=='Scissor' && user_choice=="Paper")
        {
            document.getElementById("status").textContent="Computer Wins";
            computer_score+=1;
            document.getElementById("computer_score").textContent=computer_score;
        }
        else
        {
            document.getElementById("status").textContent="You Win";
            user_scores+=1;
            document.getElementById("user_scores").textContent=user_scores;
        }
    }
    

}

class Root extends Component{
    static template=xml`
    <div class="Container">
        <Counter />
        <Status />
        <Button />
    </div>    
    `;

    static components ={ Counter,Button,Status}
}

mount(Root,document.body)