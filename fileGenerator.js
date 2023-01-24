function fileGenerator(response) {
    return `# ${response.title}
    
    
    ### Table of Contents
    ***
    * [Repository Description](#Repository Description)
    * [Installation Instructions](#Install)
    * [How to use the app](#Usage)
    * [References](#ref)
    * [Future iterations](#Future-Project)
    
    ## APPLICATION DESCRIPTION
      ***
    [${response.description}]   
       
    ## USER STORY
    ***
    [${response.userstory}]
    ###
    ###### [Back to Table of Contents]
     (#Table-of-contents)

    ## THE DEPLOYED APPLICATION CAN BE FOUND HERE
    ***
    [${response.repo}]
    ## HOW TO USE THE APP
    ***
    [${response.description}] 

    ## HOW TO INSTALL A COPY OF THE REPO
    ***
    A copy of the repository can be cloned at
     [${response.repo}]. 
    * Simply click on the repo and select **Clone**. 
    * From the drop down menu select the copy icon. Type (directly into your terminal):
    
    'git clone' + 'the repo link' + enter.
    
    ### VIDEO WALK THROUGH OF THE APP
    ***
    https://drive.google.com/file/d/1Y-h4IA_9K2QCkUOLAG9BtmNY-esijFsz/view


    ### TECHNOLOGY USED
    ***
    [${response.technology}]
    ### HOW TO CONTRIBUTE
    ***
    ${response.contribute}
    ###### [Back to Table of Contents](#Table-of-contents)

    ### SCREENSHOTS OF THE DEPLOYED APP
    ***
    ###### [Back to Table of Contents](#Table-of-contents)

    ### FUTURE ITERATIONS
    ***
    [${response.future}]
    ###### [Back to Table of Contents](#Table-of-contents)

    ### LICENCES
    ***
    [${response.license}]
    ###### [Back to Table of Contents](#Table-of-contents)

    ##CONTACT ME
    ***
    ### ${response.username} : ${response.GitHub} [Email me]${response.email}`
};

module.exports = fileGenerator;