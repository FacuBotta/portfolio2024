# Background generator with lessons automatically generated with llama3! 📚

![](./assets/newBackgroung.jpg)

## Application Description

> This Python script generates a question and an answer about any of the topics of your choice.
> To achieve this, it uses the Python library ollama and the llama3 model installed locally on your computer.
> For now, I haven't included an option to perform the process with an API like OpenAI or llama3 remotely, so you'll need to have the llama3 model installed on your computer to test its functionality. I'm using llama3:8b and it works very fine.

## Configuration

> Download the repository
> Optional: Create a virtual environment
> Install the dependencies by running
> ```  pip install -r requirements.txt ```
> Modify the .env file following the instructions inside
> Remember, you must have the llama3 model installed on your computer!
> You can do it on the Ollama website following their instructions: [Ollama](https://ollama.com/)

### Optional

> In my case, I created a .sh file to then perform a Windows automatic task that will run it after starting the session. So, I'll have a new background generated every time I turn on my computer!
> Here's how my file looks (see that in my case, I have a virtual environment where I installed the dependencies and I must activate it to run the script):
```sh
     #!/bin/bash

    cd /c/Users/User/Documents/winWallpaperGenerator
    source venv/Scripts/activate
    python app.py 
```
## And that's it! Now you'll have a new lesson available every time you turn on your computer!

## Give a ⭐️ if this project helped you!

### I'm not an expert Python developer, and I've only tested the project on my PC, so if you encounter any issues, please let me know!