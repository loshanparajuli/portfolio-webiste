// Portfolio website functionality

// Content data for navigation links
const contentData = {
    'home': {
        title: 'Home',
        content: `
            <div class="p-6">
                <h2 class="text-2xl font-bold text-black mb-4">Welcome Home</h2>
                <div class="space-y-6 text-gray-700">
                    <p>Welcome to my portfolio! I'm passionate about creating meaningful content and building digital experiences that make a difference.</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="text-lg font-semibold text-black mb-2">What I Do</h3>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Content Creation & Strategy</li>
                            <li>Digital Marketing</li>
                            <li>Web Development</li>
                            <li>Personal Branding</li>
                        </ul>
                    </div>
                    <p>Feel free to explore the different sections to learn more about my work and experience.</p>
                </div>
            </div>
        `
    },
    'yt-channel': {
        title: 'A Video',
        content: `
            <div class="p-6">
                <h2 class="text-2xl font-bold text-black mb-4">A Video</h2>
                <div class="space-y-6 text-gray-700">
                    <p>Welcome to my video content where I share insights about content creation, digital marketing, and personal development.</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="text-lg font-semibold text-black mb-2">Video Highlights</h3>
                        <ul class="list-disc list-inside space-y-2">
                            <li>Content Strategy Tips</li>
                            <li>Digital Marketing Insights</li>
                            <li>Personal Growth Stories</li>
                            <li>Behind-the-scenes Content</li>
                        </ul>
                    </div>
                    <p>Subscribe to stay updated with the latest content and join our growing community of creators and entrepreneurs.</p>
                </div>
            </div>
        `
    },
    'content': {
        title: 'LinkedIn',
        content: `
            <div class="p-6">
                <h2 class="text-2xl font-bold text-black mb-4">LinkedIn</h2>
                <div class="space-y-6 text-gray-700">
                    <p>Connect with me on LinkedIn for professional updates and insights.</p>
                    <div class="space-y-4">
                        <div class="border-l-4 border-black pl-4">
                            <h3 class="text-xl font-semibold text-black mb-2">Professional Experience</h3>
                            <p>Content creation, digital marketing, and strategic communications</p>
                        </div>
                        <div class="border-l-4 border-black pl-4">
                            <h3 class="text-xl font-semibold text-black mb-2">Content Strategy</h3>
                            <p>Building engaging content that drives results and builds communities</p>
                        </div>
                        <div class="border-l-4 border-black pl-4">
                            <h3 class="text-xl font-semibold text-black mb-2">Networking</h3>
                            <p>Connecting with like-minded professionals and sharing knowledge</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'dolor': {
        title: 'LinkedIn Case Study',
        content: `
            <div class="p-6">
                <h2 class="text-2xl font-bold text-black mb-4">In-Depth Story Success Case Study</h2>
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                    <p class="text-sm text-gray-600 mb-2">Original LinkedIn Post:</p>
                    <a href="https://www.linkedin.com/posts/loshanparajuli_case-study-on-in-depth-story-how-we-built-activity-7348263342173499392-Yyml/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADXfwZ0BsAloY_y7xKoCbB-c17UiUGu9q7Q" 
                       target="_blank" rel="noopener noreferrer" 
                       class="text-blue-600 hover:text-blue-800 underline">
                        View on LinkedIn
                    </a>
                </div>
                <div class="space-y-4 text-gray-700">
                    <p><strong>Key Metrics:</strong></p>
                    <ul class="list-disc list-inside space-y-2 ml-4">
                        <li>570,000 Subscribers</li>
                        <li>84,000,000 Views</li>
                        <li>1,000,000,001+ Impressions</li>
                    </ul>
                    <p><strong>Strategy:</strong></p>
                    <p>Leveraged in-depth storytelling to gain 500K organic followers through patience, time, and strategic content distribution.</p>
                    <p><strong>Approach:</strong></p>
                    <p>No shortcuts or hacks - just consistent, quality content that resonates with the audience and builds genuine connections.</p>
                </div>
            </div>
        `
    },
    'nemo': {
        title: 'Nemo Enim - About Me',
        content: `
            <div class="p-6">
                <h2 class="text-2xl font-bold text-black mb-4">About Me</h2>
                <div class="space-y-6 text-gray-700">
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit - this Latin phrase means "For no one rejects, dislikes, or avoids pleasure itself."</p>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="text-lg font-semibold text-black mb-2">My Philosophy</h3>
                        <p>I believe in creating content that people naturally want to consume and share. Just like this Latin phrase suggests, people are drawn to what brings them value and pleasure.</p>
                    </div>
                    <div class="border-l-4 border-black pl-4">
                        <h3 class="text-xl font-semibold text-black mb-2">Content Strategy</h3>
                        <p>My approach focuses on understanding what truly resonates with audiences and creating content that naturally attracts engagement without forced tactics.</p>
                    </div>
                </div>
            </div>
        `
    }
};

// Function to display content in the right panel
function displayContent(key) {
    const rightContent = document.getElementById('rightContent');
    const content = contentData[key];
    
    if (content) {
        rightContent.innerHTML = content.content;
        
        // Auto-scroll to content on mobile devices
        if (window.innerWidth <= 1024) {
            setTimeout(() => {
                rightContent.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
    } else {
        rightContent.innerHTML = `
            <div class="text-center text-gray-500 py-20">
                <p class="text-lg">Content not found</p>
            </div>
        `;
    }
}

// Function to handle email form submission
function handleEmailSubmit() {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
        // Show success message
        alert('Thank you! I\'ll get back to you soon.');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address.');
    }
}

// Function to validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for email form
    const sendBtn = document.getElementById('sendBtn');
    if (sendBtn) {
        sendBtn.addEventListener('click', handleEmailSubmit);
    }
    
    // Add event listener for Enter key in email input
    const emailInput = document.getElementById('emailInput');
    if (emailInput) {
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleEmailSubmit();
            }
        });
    }
});
