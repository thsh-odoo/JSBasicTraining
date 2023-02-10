const { Component , mount ,useEnv, xml,useState, onMounted } = owl;

class Counter extends Component{
    static template = xml`    
    <div class="Scores">
        <p>Computer : 
            <span><t t-esc="props.scores.computer_scores"/></span>
        </p>
        <p>
            You :
            <span><t t-esc="props.scores.user_scores"/></span>
        </p>
    </div>
    `;
    static props=["scores"]
}

class Status extends Component{
    static template = xml`
    <div class="center">
        <h2><t t-esc="props.state"/></h2>
    </div>
    `;
    setup()
    {
        console.log(this.props);
    }
    static props=["state"]
}

class Button extends Component{
    static template = xml`
    <div class="center">
        <Counter scores="this.scores"/>
        <Status state="this.scores.ans"/>
        <button t-on-click="playgame" class="btn danger" id="Rock">Rock</button>
        <button t-on-click="playgame" class="btn success" id="Paper">Paper</button>
        <button t-on-click="playgame" class="btn warning" id="Scissor">Scissor</button>
    </div>
    `;
    playgame(a)
    {
        let user_choice=a.target.id;
        const choices=['Rock','Paper','Scissor'];
        let computer_choice=Math.floor(Math.random() * choices.length); 
        if(choices[computer_choice]=='Rock' && user_choice=="Rock" || choices[computer_choice]=='Paper' && user_choice=="Paper" || choices[computer_choice]=='Scissor' && user_choice=="Scissor"  )
        {
            this.scores.ans="Draw";
        }
        else if (choices[computer_choice]=='Paper' && user_choice=="Rock" || choices[computer_choice]=='Rock' && user_choice=="Scissor" || choices[computer_choice]=='Scissor' && user_choice=="Paper")
        {
            this.scores.ans="Computer Wins";
            this.scores.computer_scores+=1;
        }
        else
        {
            this.scores.ans="You Win";
            this.scores.user_scores+=1;
        }
    }
    setup()
    {
        this.scores=useState({
            computer_scores : 0,
            user_scores : 0,
            ans : ""
        });  
    }

    static components = { Counter , Status}
    
}

class Root extends Component{
    static template=xml`
    <div class="Container">
        <Button />
    </div>    
    `;
    
    
    static components ={ Button,Status}
}

mount(Root,document.body)