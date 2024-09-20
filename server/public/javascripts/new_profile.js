
    const navigateBack = document.getElementById('navigate_back');
    const error = document.getElementById('error');


    // get all element by their id
    let name = document.getElementById('fullName');
    let title = document.getElementById('title');
    let address = document.getElementById('address');

    // Education
    let institution = document.getElementById('institution');
    let eduStarted = document.getElementById('edu_started');
    let eduFinish = document.getElementById('edu_finish');


    // Exprerience
    let roleTitle = document.getElementById('role_title');
    let roleDescription = document.getElementById('role_description');
    let roleStarted = document.getElementById('role_started');
    let roleFinish = document.getElementById('role_finish');

    // Summary
    let summary = document.getElementById('summary');
    
    // Contact
    let phoneNumber = document.getElementById('phoneNumber');
    let github = document.getElementById('github');
    let linkedin = document.getElementById('linkedin');
    let x = document.getElementById('x');

    // Certifications
    let certType = document.getElementById('cert_type');
    let certImage = document.getElementById('cert_image');

    // Programming Languages
    let framework = document.getElementById('framework');

    // Skills
    let skills = document.getElementById('skills'); 
    
    // Projects
    let projectTitle = document.getElementById('project_title');    
    let projectSummary = document.getElementById('project_summary');    
    let projectTechnologies = document.getElementById('project_technologies');    
    let projectGithubLink = document.getElementById('project_github_link');    
    let projectLiveLink = document.getElementById('project_live_link');  
    

    // Forms
    const personalInfoForm = new FormData();
    const educationForm = new FormData();
    const experienceForm = new FormData();
    const summaryForm = new FormData();
    const contactForm = new FormData();
    const certificationForm = new FormData();
    const frameworkForm = new FormData();
    const skillsForm = new FormData();
    const projectsForm = new FormData();

    const createProfile = async () => {
        /* 
            create profile user
        */

        // add personal data to form
        personalInfoForm.append('name', name.value);
        personalInfoForm.append('title', title.value);
        personalInfoForm.append('address', address.value);

        // add education data to form
        educationForm.append('institution', institution.value);
        educationForm.append('eduStarted', eduStarted.value);
        educationForm.append('eduFinish', eduFinish.value);

        // add experience to form
        experienceForm.append('roleTitle', roleTitle.value);
        experienceForm.append('roleDescription', roleDescription.value);
        experienceForm.append('roleStarted', roleStarted.value);
        experienceForm.append('roleFinish', roleFinish.value);

        // add summary to form
        summaryForm.append('summary', summary.value);

        // add contact to form
        contactForm.append('phoneNumber', phoneNumber.value);
        contactForm.append('github', github.value);
        contactForm.append('linkedin', linkedin.value);
        contactForm.append('x', x.value);
        
        // add  certification to form
        certificationForm.append('certType', certType.value);
        certificationForm.append('certImage', certImage.value);

        // add  skills to form
        skillsForm.append('skills', skills.value);

        // add  projects to form
        projectsForm.append('projectTitle', projectTitle.value);
        projectsForm.append('projectSummary', projectSummary.value);
        projectsForm.append('projectTechnologies', projectTechnologies.value);
        projectsForm.append('projectGithubLink', projectGithubLink.value);
        projectsForm.append('projectLiveLink', projectLiveLink.value);

        console.log('CreateProfile click');

        const response = await fetch('/profiles/create_profile', {
            method: 'POST',
            headers: {
                'content-type': 'applications/json'
            },
            body: {
                name: 'Hemo',
                title: 'Yodsiuw'
            },
        });

        if (response.ok) {
            // history.back()
            // navigateBack.click();
            console.log('Profile created', response.json());
            
        } else {
            error.textContent = "Error occured!"
        }
    }