export interface BlogPost {
    id: string
    title: string
    excerpt: string
    date: string
    readTime: string
    category: string
    image: string
    content: string
}

export const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'The Importance of Regular Health Checkups',
        excerpt: 'Discover why preventive health screenings are crucial for maintaining optimal health and detecting potential issues early.',
        date: 'Dec 15, 2024',
        readTime: '5 min read',
        category: 'Health Tips',
        image: '/images/blog-header.png',
        content: `
      <p class="mb-4">Regular health checkups are an essential part of maintaining a healthy lifestyle. They help in detecting potential health issues early, often before they show any symptoms. Early detection increases the chances of successful treatment and cure.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Why Early Detection Matters</h3>
      <p class="mb-4">Many chronic diseases such as diabetes, hypertension, and certain types of cancer do not show early warning signs. Routine screenings can uncover these conditions, allowing for timely intervention.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">What to Expect During a Checkup</h3>
      <p class="mb-4">A standard health checkup typically includes blood tests to check cholesterol and glucose levels, blood pressure monitoring, and a physical examination. Depending on your age and gender, additional tests like mammograms or prostate screenings may be recommended.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Benefits of Preventive Care</h3>
      <ul class="list-disc pl-6 mb-4 space-y-2">
        <li>Reduces the risk of getting sick.</li>
        <li>Detects potentially life-threatening health conditions or diseases early.</li>
        <li>Increases chances for treatment and cure.</li>
        <li>Limits extra costs of healthcare over time by avoiding costly medical services.</li>
        <li>Increases lifespan and improves health.</li>
      </ul>
      
      <p class="mb-4">At Ritu Diagnostic, we offer comprehensive health packages tailored to different age groups and lifestyles. Schedule your checkup today to take a proactive step towards your health.</p>
    `
    },
    {
        id: '2',
        title: 'Understanding Your Blood Test Results',
        excerpt: 'A comprehensive guide to interpreting common blood test parameters and what they mean for your health.',
        date: 'Dec 10, 2024',
        readTime: '7 min read',
        category: 'Education',
        image: '/images/service-lab.png',
        content: `
      <p class="mb-4">Blood tests are one of the most common diagnostic tools used by doctors to assess your overall health. However, interpreting the results can be confusing without medical knowledge. Here is a guide to some common parameters.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Complete Blood Count (CBC)</h3>
      <p class="mb-4">This test measures the components of your blood, including red blood cells, white blood cells, and platelets. Abnormal levels can indicate conditions like anemia, infection, or clotting disorders.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Lipid Profile</h3>
      <p class="mb-4">This panel measures cholesterol and triglyceride levels. High levels of LDL (bad cholesterol) can increase your risk of heart disease, while HDL (good cholesterol) helps protect against it.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Blood Glucose</h3>
      <p class="mb-4">Fasting blood sugar and HbA1c tests are used to diagnose and monitor diabetes. Maintaining healthy blood sugar levels is vital for preventing long-term complications.</p>
      
      <p class="mb-4">Always consult with your healthcare provider to understand what your specific results mean for your health journey.</p>
    `
    },
    {
        id: '3',
        title: 'Advancements in Medical Imaging Technology',
        excerpt: 'Learn about the latest innovations in diagnostic imaging and how they improve accuracy and patient comfort.',
        date: 'Dec 5, 2024',
        readTime: '6 min read',
        category: 'Technology',
        image: '/images/service-imaging.png',
        content: `
      <p class="mb-4">Medical imaging has come a long way, revolutionizing how we diagnose and treat diseases. From clear X-rays to detailed MRI scans, technology is making diagnostics faster, more accurate, and more comfortable for patients.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">Digital X-Rays</h3>
      <p class="mb-4">Modern digital X-rays produce high-resolution images instantly with significantly less radiation exposure compared to traditional film X-rays.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">3D Ultrasound</h3>
      <p class="mb-4">3D and 4D ultrasounds provide real-time, lifelike images, which are particularly valuable in obstetrics and cardiac imaging.</p>
      
      <h3 class="text-2xl font-bold mb-3 mt-6">MRI Comfort</h3>
      <p class="mb-4">Newer MRI machines are designed with wider bores and quieter operation, reducing claustrophobia and anxiety for patients undergoin scans.</p>
      
      <p class="mb-4">Ritu Diagnostic stays at the forefront of these advancements to ensure our patients receive the best possible care with the most advanced technology available.</p>
    `
    }
]
