function fileGenerator(response) {
    varcontent = `# ${response.title}
    
    
    ## Table of Contents
    ***
    * [Repository Description](#Repository Description)
    * [Installation Instructions](#Install)
    * [How to use the app](#Usage)
    * [References](#ref)
    * [Future iterations](#Future-Project)
    
    ##APPLICATION DESCRIPTION
      ***
    [${response.description}]   
       
    ##USER STORY
    ***
    ###
    ###### [Back to Table of Contents]
     (#Table-of-contents)

    ##THE DEPLOYED APPLICATION CAN BE FOUND HERE
    ***
    ##HOW TO USE THE APP
    ***
    [${response.description}] 

    ##HOW TO INSTALL A COPY OF THE REPO
    ***
    [${response.GitHub}]

    ### HOW TO CONTRIBUTE
    ***
    ${response.contribute}
    ###### [Back to Table of Contents](#Table-of-contents)

    ### SCREENSHOTS OF THE DEPLOYED APP
    ***
    ###### [Back to Table of Contents](#Table-of-contents)

    ##CONTACT ME
    ***
    ### [${response.userName}](${response.GitHub}) [Email me](${response.email})`
};

module.export = fileGenerator;