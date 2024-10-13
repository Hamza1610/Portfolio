    const navigateBack = document.getElementById('navigate_back');
    const error = document.getElementById('error');


    const createProfile = async () => {
        /* 
            create profile user
        */
    
        // Create a single FormData object
        // const formData = new FormData();
        const formData = {
            'PersonalInfo': {},
            'Institutions': {},
            'Experience': {},
            'Summary': {},
            'Contact': {},
            'Frameworks': {},
            'Skills': {},
            'Projects': {}
        };

        
        // get all element by their id
        const fullName = document.getElementById('fullName');
        const title = document.getElementById('title');
        const address = document.getElementById('address');
        // Add personal data
        formData['PersonalInfo']['Name'] =  fullName.value;
        formData['PersonalInfo']['Title'] =  title.value;
        formData['PersonalInfo']['Address'] =   address.value;

        // Education *
        const institutions = document.getElementsByClassName('institution');
        const eduStarteds = document.getElementsByClassName('edu_started');
        const eduFinishes = document.getElementsByClassName('edu_finish');
        // add institutions data to form
        
        for (let index = 0; index < institutions.length; index++) {
            formData['Institutions'][`${index}`] = formData['Institutions'][`${index}`] || {};
            formData['Institutions'][`${index}`]['Name'] = institutions[index].value;
            formData['Institutions'][`${index}`]['Started'] = new Date(eduStarteds[index].value);
            formData['Institutions'][`${index}`]['Finish'] = new  Date(eduFinishes[index].value);            
        }

        
        // Exprerience *
        // Add multiple experience entries (handling multiple roles)
        const roleTitles = document.getElementsByClassName('role_title'); // assuming multiple role titles
        const roleDescriptions = document.getElementsByClassName('role_description');
        const roleStarteds = document.getElementsByClassName('role_started');
        const roleFinishes = document.getElementsByClassName('role_finish');
        // Add Experience
        for (let index = 0; index < roleTitles.length; index++) {
            formData[`Experience`][index] = formData[`Experience`][index] || {}
            formData[`Experience`][index]['Title'] = roleTitles[index].value;
            formData[`Experience`][index]['Description'] = roleDescriptions[index].value;
            formData[`Experience`][index]['Started'] = roleStarteds[index].value;
            formData[`Experience`][index]['Finish'] = roleFinishes[index].value;
        };

        
        // Add summary
        const summary = document.getElementById('summary');
        formData['Summary']['Content'] = summary.value;
    
        // Contact
        const phoneNumber = document.getElementById('phoneNumber');
        const github = document.getElementById('github');
        const linkedin = document.getElementById('linkedin');
        const x = document.getElementById('x');
        // Add contact
        formData['Contact']['PhoneNumber'] = phoneNumber.value;
        formData['Contact']['Github'] = github.value;
        formData['Contact']['LinkedIn'] = linkedin.value;
        formData['Contact']['X'] = x.value;

        
        // Programming Languages *
        const frameworks = document.getElementsByClassName('framework');
        for (let index = 0; index < frameworks.length; index++) {
            formData['Frameworks'][index] = formData['Frameworks'][index] || {}
            formData['Frameworks'][index] = frameworks[index].value;
        }
        
        // Skills *
        const skills = document.getElementsByClassName('skills'); 
        for (let index = 0; index < skills.length; index++) {
            formData['Skills'][index] = formData['Skills'][index] || {}
            formData['Skills'][index] = skills[index].value;
            
        }

        // Projects *
        const projectTitles = document.getElementsByClassName('project_title');    
        const projectSummaries = document.getElementsByClassName('project_summary');    
        const projectTechnologies = document.getElementsByClassName('project_technologies');    
        const projectGithubLinks = document.getElementsByClassName('project_github_link');    
        const projectLiveLinks = document.getElementsByClassName('project_live_link');  
        
        for (let index = 0; index < projectTitles.length; index++) {
            // Add projects
            formData['Projects'][index] = formData['Projects'][index] || {};
            formData['Projects'][index]['Title'] = projectTitles[index].value;
            formData['Projects'][index]['Summary'] = projectSummaries[index].value;
            formData['Projects'][index]['Technologies'] = projectTechnologies[index].value;
            formData['Projects'][index]['GitHub'] = projectGithubLinks[index].value;
            formData['Projects'][index]['Demo'] = projectLiveLinks[index].value;            
        }

        const fields = document.getElementsByClassName('form-control');
        
        // check if field is empty

        for (let key in fields) {

            if (fields[key].value == '' || fields[key].value == undefined) {                
                error.textContent = `Please fill! ${fields[key].name}`;
                break
            }
        }
        try {
            console.log('Form data', formData);
            
            await fetch('/profiles/create_profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            .then((response) => {
                if (response.ok) {
                    const result = response.json();
                    console.log('Profile created', result);
                    navigateBack.click();
                    
                } else {
                    console.error('Error occurred:', response.json());
                    console.error('Error  status:', response.status());
                    error.textContent = `Error occurred: ${response.json()}`;
                }
            })

        } catch (error) {
            console.error('Request failed:', error);
            error.textContent = "Error occurred!: ", error;
        }
    };
    

    const addEducationFieldGroup = () => {
        
        // select education class
        const newFormGroup = document.createElement('div');
        const FormContainer = document.getElementById('education-container');
        // set class to new form group
        newFormGroup.className = 'education-group d-flex gap-4 flex-wrap';
        newFormGroup.innerHTML = `
                    <label class="fw-semibold" for="institution">Name of Institution</label>
                    <input class="institution w-100 form-control" type="text" name="institution" id="institution" required>
                    <label class="fw-semibold" for="started">Started</label>
                    <input class="edu_started w-25  form-control" type="date" name="startedInstitutionDate" id="edu_started" required>
                    <label class="fw-semibold" for="finish">Finish</label>
                    <input class="edu_finish w-25 form-control" type="date" name="finishedInstitutionDate" id="edu_finish" required>
                    <button class="m-2 btn btn-danger" onclick="removeFieldGroup(this)">Remove</button>  
        `;
        FormContainer.appendChild(newFormGroup);
    }

    const addExperienceFieldGroup = () => {
                
        // select Container class
        const newFormGroup = document.createElement('div');
        const FormContainer = document.getElementById('experience-container');
        // set class to new form group
        newFormGroup.className = 'experience-group';
        newFormGroup.innerHTML = `
            <label for="role_title">Role Title</label>
                    <input class="role_title form-control w-100" type="text" name="roleTitle" id="role_title" required>
                    
                    <label for="role_description">Role  Description</label>
                    <textarea class="role_description form-control w-100 h-auto" cols="30" rows="5" type="text" name="roleDescription" id="role_description" required></textarea>
                    <div class="d-flex gap-3 flex-wrap">
                        <label class="fw-semibold" for="started">Started</label>
                        <input class="role_started form-control" type="date" name="startedRoleDate" id="role_started" required>

                        <label class="fw-semibold" for="finish">Finish</label>
                        <input class="role_finish form-control" type="date" name="finishedRoleDate" id="role_finish" required>
                    </div>
                    <button class="btn btn-danger" onclick="removeFieldGroup(this)">Remove</button>
        `;
        FormContainer.appendChild(newFormGroup);
    }

    const addCertificationsFieldGroup = () => {
                // select Container class
                const newFormGroup = document.createElement('div');
                const FormContainer = document.getElementById('certification-container');
                // set class to new form group
                newFormGroup.className = 'certificate-group d-flex gap-3';
                newFormGroup.innerHTML = `
                                        <label for="cert_type">Certification type</label>
                    <input class="cert_type form-control w-25" type="text" name="certificationType" id="cert_type">
    
                    <label for="cert_image">Upload certificate</label>
                    <input class="cert_image form-control w-25" type="file" accept=".jpg, .png" name="certificationType" id="cert_image">
                    <button class="btn btn-danger" onclick="removeFieldGroup(this)">Reomve</button>
                `;
                FormContainer.appendChild(newFormGroup);
                
    }


    const addFrameworkFieldGroup = () => {
         // select Container class
        const newFormGroup = document.createElement('div');
        const FormContainer = document.getElementById('framework-container');
         // set class to new form group
        newFormGroup.className = 'framework-group d-flex gap-3';
        newFormGroup.innerHTML = `
                    <input class="framework form-control w-75 m-1" placeholder="example: Node js, Python, Ruby .." type="text" name="language" id="framework">
                    <button class="btn btn-danger" onclick="removeFieldGroup(this)">Remove</button>
        `;
        FormContainer.appendChild(newFormGroup);
    }

    const addSkillFieldGroup = () => {
         // select Container class
         const newFormGroup = document.createElement('div');
         const FormContainer = document.getElementById('skills-container');
          // set class to new form group
         newFormGroup.className = 'skill-group w-25 d-flex flex-nowrap';
         newFormGroup.innerHTML = `
                    <input class="skills form-control m-1" placeholder="example: Time emanagement | Critical thinking .." type="text" name="skills" id="skills">
                    <button class="btn btn-danger w-auto" onclick="removeFieldGroup(this)">Remove</button>
         `;
         FormContainer.appendChild(newFormGroup);
    }


    const addProjectFieldGroup = () => {
        // select Container class
        const newFormGroup = document.createElement('div');
        const FormContainer = document.getElementById('projects-container');
        // set class to new form group
        newFormGroup.className = 'project-group';
        newFormGroup.innerHTML = `
            <label for="project_title">Project Title</label>
            <input class="project_title form-control w-75 m-1" type="text" name="projectTitle" id="project_title">
    
            <label for="project_summary">Project summary</label>
            <textarea class="project_summary form-control w-100 m-1 h-auto" rows="5" type="text" name="projectSummary" id="project_summary"></textarea>
                    
            <label for="project_technologies">Technologies</label>
            <input class="project_technologies form-control w-100 m-1 h-auto" placeholder="example: Node js, React, OpenAI" rows="5" type="text" name="projectTechnologies" id="project_technologies">
                    
            <label for="project_github_link">Github link</label>
            <input class="project_github_link form-control w-100 m-1 h-auto" rows="5" type="url" name="projectGithubLink" id="project_github_link">
                    
            <label for="project_live_link">Live link</label>
            <input class="project_live_link form-control w-100 m-1 h-auto" rows="5" type="text" name="projectLiveLink" id="project_live_link">
            <button class="btn btn-danger m-3" onclick="removeFieldGroup(this)">Remove</button>
        `;
        FormContainer.appendChild(newFormGroup);        
    }

    const removeFieldGroup = (button) => {
        console.log(button);
        
        const fieldGroup = button.parentElement;
        fieldGroup.remove();
    }

