/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    
    // --- MODULE 1: ROS 2 Architecture & Programming ---
    {
      type: 'category',
      label: 'Module 1: ROS 2 Architecture & Programming',
      items: [
        // 'index.md' aur 'intro.md' ko shamil kiya gaya hai agar woh module ke main page hain
        'Module1/intro', 
        'Module1/index', 
        'Module1/ch01-ros2-architecture',
        'Module1/ch02-nodes-topics-services',
        'Module1/ch03-python-agents-rclpy',
        'Module1/ch04-urdf-for-humanoids',
      ],
    },
    
    // --- MODULE 2: Digital Twin and Simulation ---
    {
      type: 'category',
      label: 'Module 2: Digital Twin and Simulation',
      items: [
        'Module2/intro',
        'Module2/index',
        // Files ke lambe, mukammal naam use kiye gaye hain:
        'Module2/ch01-gazebo-physics-and-collisions', 
        'Module2/ch02-digital-twin-environment-design', 
      ],
    },
    
    // --- MODULE 3: Isaac Sim and AI-Robot Basics ---
    {
      type: 'category',
      label: 'Module 3: Isaac Sim and AI-Robot Basics',
      items: [
        'Module3/intro',
        'Module3/index',
        // Yahan bhi files ke mukammal naam use kiye gaye hain:
        'Module3/01-Introduction-to-AI-Robot-Brain',
        'Module3/02-Isaac-Sim-Simulation',
        'Module3/03-Isaac-ROS-VSLAM-and-Nav2-Planning', // Pura naam screenshot se liya gaya hai
      ],
    },
    
    // --- MODULE 4: Cognitive Planning and Autonomy ---
    {
      type: 'category',
      label: 'Module 4: Cognitive Planning and Autonomy',
      items: [
        'Module4/intro',
        'Module4/index',
        'Module4/ch01-voice-to-action',
        'Module4/ch02-llm-cognitive-planning',
        'Module4/ch03-vision-and-navigation',
        'Module4/ch04-capstone-autonomous-humanoid', // Pura naam screenshot se liya gaya hai
      ],
    },
  ],
};

module.exports = sidebars;
