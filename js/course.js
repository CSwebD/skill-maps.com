<<<<<<< HEAD
document.getElementById('search-type').addEventListener('change', function() {
    const type = this.value;
    document.getElementById('roadmap-options').style.display = type === 'roadmap' ? 'block' : 'none';
    document.getElementById('course-options').style.display = type === 'course' ? 'block' : 'none';
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const type = document.getElementById('search-type').value;
    let url = '';
    
    if (type === 'roadmap') {
        const category = document.getElementById('roadmap-category').value;
        if (category) {
            switch(category) {
                case 'roles':
                    url = 'Role_based_Roadmaps.html';
                    break;
                case 'skills':
                    url = 'Skill_Based_Roadmaps.html';
                    break;
                case 'ai':
                    url = 'AI.html';
                    break;
                default:
                    alert('Please select a valid Roadmap category.');
                    return;
            }
        } else {
            alert('Please select a Roadmap category.');
            return;
        }
    } else if (type === 'course') {
        const title = document.getElementById('course-title').value;
        if (title) {
            switch(title) {
                case 'Python':
                    url = 'Python.html';
                    break;
                case 'Java':
                    url = 'Java.html';
                    break;
                case 'Vue':
                    url = 'Vue.html';
                    break;                
                case 'Docker':
                    url = 'Docker.html';
                    break;
                case 'Angular':
                    url = 'Angular.html';
                    break;
                case 'Frontend':
                    url = 'Frontend.html';
                    break;                
                case 'Backend':
                    url = 'Backend.html';
                    break;
                case 'DevOps':
                    url = 'DevOps.html';
                    break;                
                case 'FullStuck':
                    url = 'FullStuck.html';
                    break;
                case 'Software Architect':
                    url = 'Software_Architect.html';
                    break;                
                case 'Introduction to AI':
                    url = 'Introduction_to_AI.html';
                    break;                
                case 'Maths and Statisctics for AI':
                    url = 'maths_and_statistics_for_ai.html';
                    break;
                case 'Machine Learning':
                    url = 'machine_learning.html';
                    break;
                case 'Deep learning':
                    url = 'deep_learning.html';
                    break;                
                case 'Natural Language Processing':
                    url = 'natural_language_processing.html';
                    break;
                case 'AI Ethics':
                    url = 'ai_ethics.html';
                    break;                
                case 'AI Practics and Projects':
                    url = 'practics_and_projects.html';
                    break;
                case 'AI Resources':
                    url = 'resources.html';
                    break;
                default:
                    alert('Please select a valid Course Title.');
                    return;
            }
        } else {
            alert('Please select a Course Title.');
            return;
        }
    } else {
        alert('Please select a search type.');
        return;
    }
    
    // Redirect to the constructed URL
    window.location.href = url;
});
=======
document.getElementById('search-type').addEventListener('change', function() {
    const type = this.value;
    document.getElementById('roadmap-options').style.display = type === 'roadmap' ? 'block' : 'none';
    document.getElementById('course-options').style.display = type === 'course' ? 'block' : 'none';
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const type = document.getElementById('search-type').value;
    let url = '';
    
    if (type === 'roadmap') {
        const category = document.getElementById('roadmap-category').value;
        if (category) {
            switch(category) {
                case 'roles':
                    url = 'Role_based_Roadmaps.html';
                    break;
                case 'skills':
                    url = 'Skill_Based_Roadmaps.html';
                    break;
                case 'ai':
                    url = 'AI.html';
                    break;
                default:
                    alert('Please select a valid Roadmap category.');
                    return;
            }
        } else {
            alert('Please select a Roadmap category.');
            return;
        }
    } else if (type === 'course') {
        const title = document.getElementById('course-title').value;
        if (title) {
            switch(title) {
                case 'Python':
                    url = 'Python.html';
                    break;
                case 'Java':
                    url = 'Java.html';
                    break;
                case 'Vue':
                    url = 'Vue.html';
                    break;                
                case 'Docker':
                    url = 'Docker.html';
                    break;
                case 'Angular':
                    url = 'Angular.html';
                    break;
                case 'Frontend':
                    url = 'Frontend.html';
                    break;                
                case 'Backend':
                    url = 'Backend.html';
                    break;
                case 'DevOps':
                    url = 'DevOps.html';
                    break;                
                case 'FullStuck':
                    url = 'FullStuck.html';
                    break;
                case 'Software Architect':
                    url = 'Software_Architect.html';
                    break;                
                case 'Introduction to AI':
                    url = 'Introduction_to_AI.html';
                    break;                
                case 'Maths and Statisctics for AI':
                    url = 'maths_and_statistics_for_ai.html';
                    break;
                case 'Machine Learning':
                    url = 'machine_learning.html';
                    break;
                case 'Deep learning':
                    url = 'deep_learning.html';
                    break;                
                case 'Natural Language Processing':
                    url = 'natural_language_processing.html';
                    break;
                case 'AI Ethics':
                    url = 'ai_ethics.html';
                    break;                
                case 'AI Practics and Projects':
                    url = 'practics_and_projects.html';
                    break;
                case 'AI Resources':
                    url = 'resources.html';
                    break;
                default:
                    alert('Please select a valid Course Title.');
                    return;
            }
        } else {
            alert('Please select a Course Title.');
            return;
        }
    } else {
        alert('Please select a search type.');
        return;
    }
    
    // Redirect to the constructed URL
    window.location.href = url;
});
>>>>>>> c6c1c3b1e383bca6621f08454d7295c3a6b65d5b
