import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
            _id:1,
            name:'Basir',
            email:'admin@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAuthor: true,
        },
        {
            _id:2,
            name:'John',
            email:'user@example.com',
            password: bcrypt.hashSync('1234', 8),
            isAuthor: false,
        },

    ],
    courses: [
        {
            _id:1,
            author:'Mark Wahlbeck',
            name:'Beginner Full Stack Web Development: HTML, CSS, React & Node',
            category:'Development',
            image:'~assets/1042110_ffc3_4.jpg',
            price:329,
            rating:4.5,
            numReviews:10,
            description:'Welcome to the Ultimate Web Developer Bootcamp. This is your one-stop-shop to learn front-end AND back-end development',
            language:'English',
            numStudents:106418,
            content:["/videos/video1.mp4","/videos/video2.mp4"]
        
        },
        {
            _id:2,
            author:'Pichai Chinawong',
            name:'สอน Docker ใช้งานได้ใน 4 ชั่วโมง',
            category:'Development',
            image:'~assets/1442224_a8e0_2.jpg',
            price:599,
            rating:4.5,
            numReviews:12,
            description:'สำหรับผู้เรียนจะได้เรียนรู้การทำงานของ Docker ตั้งแต่เริ่มติดตั้ง จนไปถึงการใช้งานจริง ซึ่งจะทำให้ผู้เรียนได้เข้าใจหลักการทำงาน และวิธีการใช้งานจริง และสามารถนำไปใช้งานได้อย่างมีประสิทธิภาพ การเรียนจะไม่ได้สอนแบบเปิดคู่มือการใช้งานแล้วแปลให้ผู้เรียนฟังแต่จะเป็นการสอนเพื่อให้ผู้เรียนเข้าใจและเห็นภาพ พร้อมทั้งการแสดงตัวอย่างการใช้งน สามารถนำไปต่อยอดการใช้งาน และสามารถหาคำตอบได้ด้วยตัวเอง ซึ่งบทเรียนจะครอบคุณตั้งแต่เริ่มใช้งาน จนถึงการใช้งาน Docker Swarm ด้วยการสอนแบบ Step by Step ทำให้ทำตามได้อย่างง่ายดาย',
            language:'Thai',
            numStudents:396,
            content:["/videos/video1.mp4","/videos/video2.mp4"]
        },
        {
            _id:3,
            author:'May Taylor, MBM',
            name:'มือใหม่ขายของเฟซบุ๊กออนไลน์',
            category:'Business',
            image:'~assets/1491286_f811_2.jpg',
            price:329,           
            rating:4.0,
            numReviews:8,
            description:'คุณทราบไหมคะว่าคนไทยเป็นผู้ใช้เฟซบุ๊กอันดับ 9 ของโลก ประมาณ 47 ล้านคน และเป็นเมืองหลวงที่มีคนใช้เฟซบุ๊กมากที่สุดเป็นอันดับ 1 ของโลก ประมาณ 30 ล้านคน (ข้อมูลจากการสำรวจของ Hootsuit) และแน่นอนว่าเป็นกลุ่มลูกค้าเป้าหมายของสินค้าหลายร้อยหรือหลายพันชนิดด้วยกัน เพราะฉะนั้นการขายของออนไลน์ที่เฟซบุ๊กจึงเป็นตัวเลือกที่หาลูกค้าเป้าหมายได้ไม่ยาก',
            language:'Thai',
            numStudents:43,
            content:["/videos/video1.mp4","/videos/video2.mp4"]
        },
        {
            _id:4,
            author:'ดร.อรรถสิทธิ์ หัสถีธรรม',
            name:'การบริหารเชิงกลยุทธ์ 4.0 (Strategic Management 4.0)',
            category:'Management',
            image:'~assets/1126790_436d_5.jpg',
            price:2700,
            rating:4.5,
            numReviews:14,
            description:'โลกในปัจจุบัน และอนาคต ตกอยู่ภายใต้อิทธิพลของ Digital Technology ส่งผลให้สภาวะแวดล้อมเชิงยุทธ์ศาสตร์ ทั้งในส่วนของสภาวะแวดล้อมภายนอก และสภาวะแวดล้อมทางการตลาด มีการเปลี่ยนแปลงที่รวดเร็ว โดยเฉพาะระดับความรุนแรงของการแข่งขันทางธุรกิจที่ทวีความรุนแรงมากขึ้น หนทางอยู่รอดอย่างยั่งยืนภายในสภาวะแวดล้อมเช่นนี้ องค์กรทุกรูปแบบจำเป็นจะต้องใช้ "การบริหารเชิงกลยุทธ์ 4.0 (Strategic Management 4.0)" เพื่อสร้าง "องค์กร 4.0 (Organization 4.0)" ซึ่งเป็นองค์กรที่มีวัฒนธรรมองค์กรที่เน้นการใช้ ความคิดสร้างสรรค์ (Creativity Driven) ที่จะช่วยให้องค์กรสามารถสร้างขีดความสามารถในการแข่งขันด้วยนวัตกรรม 4 มิติ (Four Dimension Innovations) และ ขับเคลื่อนองค์กรในทุกมิติ ทุกกระบวนการด้วย Digital Technology (Digital Driven) องค์กรใดๆ ที่ไม่สามารถปรับตัวไปสู่ "องค์กร 4.0 (Orgazation 4.0)" ด้วยกระบวนการ "การบริหารเชิงกลยุทธ์ 4.0 (Strategic Management 4.0)" จะเป็นองค์กรที่รอวันตาย หรือ สูญหายไปจากโลกแห่งการแข่งขันในที่สุด',
            language:'Thai',
            numStudents:243,
            content:["/videos/video1.mp4","/videos/video2.mp4"]
        },
        {
            _id:5,
            author:'Chris Croft',
            name:'Leadership: Practical Leadership Skills',
            category:'Management',
            image:'~assets/613808_3c1c_6.jpg',
            price:329,
            rating:4.5,
            numReviews:10,
            description:'Leadership is often seen an elusive or complex skill, but with this practical course you shall soon have it mastered. Whether you are managing a small team or an entire business this course will build essential skills for your time management, team motivation, and personal happiness. Leadership is an essential skill at home, at work, and in every stage of your career. If your are in charge of two or more people at work, this course could change your life.',
            language:'English',
            numStudents:74846,
            content:["/videos/video1.mp4","/videos/video2.mp4"]
        },
        {
            _id:6,
            author:'ดร.อรรถสิทธิ์ หัสถีธรรม',
            name:'หลักการ กรณีศึกษา และการประยุกต์ใช้ Risk Management',
            category:'Management',
            image:'~assets/1705204_ba19_2.jpg',
            price:2700,
            rating:4.5,
            numReviews:15,
            description:'ความเสี่ยงถือว่าเป็นเหตุการณ์ที่ทุกคน และทุกองค์กรจะต้องประสบพบเจออย่างหลีกเลี่ยงไม่ได้ในทุกเมื่อเชื่อวัน หากบริหารจัดการความเสี่ยงได้ดี ก็เป็นการเพิ่มโอกาสแห่งความสำเร็จ ไม่ว่าจะเป็นความสำเร็จในระดับบุคคล และ/หรือ ระดับองค์กร ในทางตรงกันข้าม หากบุคคล และ/หรือ องค์กร ล้มเหลวในการบริหารจัดการความเสี่ยง นั่นหมายความว่า บุคคล และ องค์กรนั้นๆ ก็มีโอกาสที่จะล้มเหลวสูง และอาจจะเป็นไปได้ว่า จะสร้างความเสียหายให้เกิดขึ้นอย่างหลีกเลี่ยงไม่ได้ โดยเฉพาะในโลกในปัจจุบัน และอนาคต ซึ่งตกอยู่ภายใต้อิทธิพลของ Digital Technology ส่งผลให้สภาวะแวดล้อมเชิงยุทธศาสตร์ ทั้งในส่วนของสภาวะแวดล้อมภายนอก และสภาวะแวดล้อมทางการตลาด มีการเปลี่ยนแปลงที่รวดเร็ว โดยเฉพาะระดับความรุนแรงของการแข่งขันทางธุรกิจที่ทวีความรุนแรงมากขึ้น หนทางอยู่รอดอย่างยั่งยืนภายในสภาวะแวดล้อมเช่นนี้ องค์กรทุกรูปแบบจำเป็นจะต้อง "พุ่งชนเป้าหมาย ทำลายความล้มเหลว ด้วยการจัดการความเสี่ยง" โดยการสร้าง "Risk Awareness Culture" ซึ่งเป็นองค์กรที่มีวัฒนธรรมองค์กรที่ฝังความคิดในเรื่อง "พุ่งชนเป้าหมาย ทำลายความล้มเหลว ด้วยการจัดการความเสี่ยง" เข้าไปในความคิด และจิตสำนึก ของทุกคนในองค์กร ไม่ว่าองค์กรนั้น จะเป็นองค์กรรูปแบบใด ทั้งธุรกิจ และหน่วยงานภาครัฐ หรือแม้กระทั่ง ในระดับบุคคล',
            language:'Thai',
            numStudents:143,
            content:["/videos/video1.mp4","/videos/video2.mp4"]
        },
    ],
};
export default data;