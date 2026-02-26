<template>
  <div class="academics-page">
    
    <div class="hero-fullscreen">
      <div class="title-container">
        <h1 class="main-title">Academics</h1>
      </div>

      <div class="tab-buttons-wrapper">
        <div class="tab-buttons">
          <button :class="{ active: activeTab === 'iot' }" @click="selectTab('iot')">
            IoT and information
          </button>
          <button :class="{ active: activeTab === 'dual' }" @click="selectTab('dual')">
            Dual Degree
          </button>
          <button :class="{ active: activeTab === 'physics' }" @click="selectTab('physics')">
            Industry Physics
          </button>
        </div>
      </div>
    </div>
    <div class="content-wrapper" ref="contentArea">
      <transition name="fade" mode="out-in">
        
        <div v-if="activeTab === 'iot'" key="iot" class="tab-content">
          <div class="content-box">
            <h2 class="box-title">What is IoT and Information ?</h2>
            <ul class="custom-list">
              <li><strong>ไอโอที (IoT - Internet of Things) คืออะไร?</strong><br>
                เทคโนโลยีที่เชื่อมต่ออุปกรณ์ต่างๆ (Hardware & Device) เข้าสู่เครือข่ายอินเทอร์เน็ต เพื่อให้สามารถรับส่งข้อมูล (Data Communication) และควบคุมการทำงานได้อัตโนมัติ (Automation) นำไปสู่การนำข้อมูลจากอุปกรณ์เหล่านั้นมาวิเคราะห์เพื่อใช้งานต่อ เช่น โครงการ Smart Home, Smart Farm หรือ Smart Factory</li>
              <li><strong>สารสนเทศ (Information) คืออะไร?</strong><br>
                ระบบประมวลผลข้อมูลรูปแบบต่างๆ ผ่านการนำข้อมูล ที่รวบรวมได้จากอุปกรณ์เครือข่าย (Database), การประมวลผล (Processing), ไปจนถึงการวิเคราะห์ข้อมูล (Data Analysis) เพื่อนำไปใช้งานให้เกิดประโยชน์และช่วยให้การจัดการระบบเครือข่ายมีประสิทธิภาพและปลอดภัย (Cyber Security)</li>
              <li><strong>วิศวกรรมไอโอทีและสารสนเทศ คืออะไร?</strong><br>
                หลักสูตรที่บูรณาการศาสตร์ทางด้าน "ไอโอที" (ฮาร์ดแวร์และระบบสมองกลฝังตัว) เข้ากับ "เทคโนโลยีสารสนเทศ" (จัดการข้อมูล) มุ่งเน้นสร้างวิศกรที่สามารถออกแบบและพัฒนาระบบอัจฉริยะ (Intelligent Systems) ที่ขับเคลื่อนด้วยข้อมูล ตอบโจทย์โลกยุคอุตสาหกรรมแห่งอนาคต (Industry 4.0 & 5.0)</li>
            </ul>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">Career Prospects</h2>
            <div class="grid-2-col">
              <div class="col-left">
                <div class="career-group">
                  <h4>ด้านฮาร์ดแวร์และระบบสมองกลฝังตัว (Hardware, Embedded & IoT)</h4>
                  <ul>
                    <li>วิศวกรระบบไอโอที (IoT Engineer)</li>
                    <li>วิศวกรระบบสมองกลฝังตัว (Embedded System Engineer)</li>
                    <li>วิศวกรซอฟต์แวร์ระบบสมองกลฝังตัว (Embedded Software Engineer)</li>
                  </ul>
                </div>
                <div class="career-group">
                  <h4>ด้านซอฟต์แวร์และแอปพลิเคชัน (Software & Application Development)</h4>
                  <ul>
                    <li>วิศวกรซอฟต์แวร์ (Software Engineer)</li>
                    <li>โปรแกรมเมอร์ (Programmer)</li>
                    <li>นักพัฒนาแอปพลิเคชัน (Application Developer)</li>
                    <li>นักพัฒนาส่วนหน้า (Front End Developer)</li>
                    <li>นักพัฒนาส่วนหลัง (Back End Developer)</li>
                    <li>นักพัฒนาฟูลสแต็ก (Full Stack Developer)</li>
                  </ul>
                </div>
              </div>
              <div class="col-right">
                <div class="career-group">
                  <h4>ด้านข้อมูลและระบบสารสนเทศ (Data & Information Systems)</h4>
                  <ul>
                    <li>นักวิทยาศาสตร์ข้อมูล (Data Scientist)</li>
                    <li>วิศวกรข้อมูล (Data Engineer)</li>
                    <li>วิศวกรระบบสารสนเทศ (Information System Engineer)</li>
                  </ul>
                </div>
                <div class="career-group">
                  <h4>ด้านโครงสร้างพื้นฐานและเครือข่าย (Infrastructure, Network & Cloud)</h4>
                  <ul>
                    <li>วิศวกรระบบเครือข่าย (Network Engineer)</li>
                    <li>วิศวกรคลาวด์ (Cloud Engineer)</li>
                    <li>ผู้ดูแลระบบ (System Administrator)</li>
                  </ul>
                </div>
                <div class="career-group">
                  <h4>กลุ่มงานวิชาการและผู้ประกอบการ (Academic & Business)</h4>
                  <ul>
                    <li>นักวิจัย / นักวิชาการ</li>
                    <li>เจ้าของธุรกิจส่วนตัว (Startup / Tech Business)</li>
                    <li>อาชีพอื่น ๆ ที่เกี่ยวข้องกับเทคโนโลยีและนวัตกรรม</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="image-text-box">
            <div class="img-area">
              <div class="placeholder-img">
                <h3>ภาควิชาวิศวกรรมคอมพิวเตอร์</h3>
                <p>DEPARTMENT OF IOT AND INFORMATION ENGINEERING</p>
              </div>
            </div>
            <div class="text-area">
              <h2 class="text-navy">Why IoTE KMITL?</h2>
              <p>หลักสูตรวิศวกรรมศาสตรบัณฑิต สาขาวิชาวิศวกรรมไอโอทีและสารสนเทศ มุ่งเน้นสร้างบัณฑิต ในการเป็นนวัตกร สร้างสรรค์ผลงานเทคโนโลยีที่ตอบโจทย์ความต้องการของประเทศ โดยบูรณาการความรู้พื้นฐานทางวิศวกรรมคอมพิวเตอร์และเทคโนโลยีสารสนเทศ สำคัญ 4 ด้าน ได้แก่ ระบบสมองกลฝังตัวและอุปกรณ์อัจฉริยะ, การพัฒนาโปรแกรมและซอฟต์แวร์, ระบบเครือข่ายอินเทอร์เน็ต, และการประยุกต์ใช้ข้อมูลเพื่อแก้ปัญหาและบริหารจัดการข้อมูล เพื่อให้ผู้เรียนสามารถออกแบบและสร้างสรรค์นวัตกรรมที่ตอบโจทย์การแก้ปัญหาของภาคอุตสาหกรรมอย่างมีประสิทธิภาพ พร้อมทั้งส่งเสริมทักษะทางภาษาและการเป็นผู้ประกอบการ เพื่อให้ผู้เรียนพร้อมเป็นผู้นำและก้าวสู่การทำงานในระดับสากล</p>
              <div class="action-btn-container">
                 <a href="/path-to-your-pdf/iote-course.pdf" target="_blank" class="outline-btn">
                    หลักสูตรวิศวกรรมระบบไอโอทีและสารสนเทศ <span class="arrow-icon">➔</span>
                 </a>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'dual'" key="dual" class="tab-content">
          <div class="text-center-box">
            <h2>หลักสูตรสองปริญญา (ควบ 2 ปริญญา) <br>(Dual Degree)</h2>
            <h3>คณะวิศวกรรมศาสตร์และคณะวิทยาศาสตร์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง<br>
            วศ.บ. วิศวกรรมระบบไอโอทีและสารสนเทศ และ วท.บ. ฟิสิกส์อุตสาหกรรม</h3>
            <p class="desc-text">โปรแกรม 2 ปริญญา (Dual Degree) ตอบโจทย์โลกยุคใหม่ ผลิตบุคลากรที่มีความเชี่ยวชาญทั้งด้านวิศวกรรมและวิทยาศาสตร์ประยุกต์ (ฟิสิกส์) เข้าด้วยกันอย่างลงตัว... ผู้เรียนจะได้รับวุฒิปริญญาตรี 2 ใบ... เรียนรู้ตั้งแต่พื้นฐานทางฟิสิกส์ การออกแบบระบบฮาร์ดแวร์และซอฟต์แวร์ ไปจนถึงการนำไปประยุกต์ใช้งานในภาคอุตสาหกรรม ตอบโจทย์เทคโนโลยีแห่งอนาคต เช่น Smart Electronics, Smart Agriculture, Smart Factory และ Smart City</p>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">Career Prospects</h2>
            <div class="grid-2-col">
              <div class="career-group">
                <h4>ด้านวิศวกรรมและฮาร์ดแวร์ (Hardware, Embedded & IoT)</h4>
                <ul>
                  <li>วิศวกรระบบไอโอที (IoT Engineer)</li>
                  <li>วิศวกรระบบสมองกลฝังตัว (Embedded System Engineer)</li>
                  <li>นักวิจัยและพัฒนาฮาร์ดแวร์ (Hardware R&D Engineer)</li>
                  <li>นักประดิษฐ์ (Inventor)</li>
                </ul>
              </div>
              <div class="career-group">
                <h4>ด้านซอฟต์แวร์และแอปพลิเคชัน (Software & Application Development & Data)</h4>
                <ul>
                  <li>วิศวกรซอฟต์แวร์ (Software Engineer)</li>
                  <li>โปรแกรมเมอร์ (Programmer)</li>
                  <li>นักพัฒนาแอปพลิเคชัน (Application Developer)</li>
                  <li>นักพัฒนาส่วนหน้า (Front End Developer)</li>
                  <li>นักพัฒนาส่วนหลัง (Back End Developer)</li>
                  <li>นักพัฒนาฟูลสแต็ก (Full Stack Developer)</li>
                  <li>นักวิทยาศาสตร์ข้อมูล (Data Scientist)</li>
                  <li>วิศวกรข้อมูล (Data Engineer)</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="course-cards-grid">
            <div class="course-card">
              <div class="card-img">IoTE Logo</div>
              <a href="/path-to-your-pdf/iote-course.pdf" target="_blank" class="outline-btn small-btn">
                หลักสูตรวิศวกรรมระบบไอโอทีและ<br>สารสนเทศ <span class="arrow-icon">➔</span>
              </a>
            </div>
            <div class="course-card">
              <div class="card-img">Physics Logo</div>
              <a href="/path-to-your-pdf/physics-course.pdf" target="_blank" class="outline-btn small-btn">
                หลักสูตรฟิสิกส์อุตสาหกรรม <span class="arrow-icon">➔</span>
              </a>
            </div>
            <div class="course-card">
              <div class="card-img">Dual Degree Logo</div>
              <a href="/path-to-your-pdf/dual-course.pdf" target="_blank" class="outline-btn small-btn">
                หลักสูตร 2 ปริญญา <span class="arrow-icon">➔</span>
              </a>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'physics'" key="physics" class="tab-content">
          <div class="image-text-box">
            <div class="img-area">
              <div class="placeholder-img students-bg">
                </div>
            </div>
            <div class="text-area">
              <h2 class="text-navy">Why Physics KMITL?</h2>
              <p>หลักสูตรวิทยาศาสตรบัณฑิต สาขาวิชาฟิสิกส์อุตสาหกรรม มุ่งเน้นสร้างบัณฑิต ในการเป็นนวัตกร องค์กรสร้างสรรค์ผลงานวิจัยและนวัตกรรมทางฟิสิกส์ โดยบูรณาการความรู้พื้นฐานทางวิทยาศาสตร์และประยุกต์ใช้กับทักษะสำคัญ 4 ด้าน ได้แก่ การพัฒนาระบบเครื่องมือวัดและควบคุม, การเขียนโปรแกรมและซอฟต์แวร์, ระบบอิเล็กทรอนิกส์และวงจร, และการประยุกต์ใช้ข้อมูลเพื่อนำไปสู่การเป็นวิศวกรนักประดิษฐ์ เพื่อให้ผู้เรียนสามารถออกแบบและสร้างสรรค์นวัตกรรมที่ตอบโจทย์ความต้องการของภาคอุตสาหกรรมอย่างมีประสิทธิภาพ พร้อมทั้งเสริมสร้างทักษะในการคิดวิเคราะห์และนำไปประยุกต์ใช้สู่การสร้างธุรกิจหรือเป็นผู้ประกอบการเทคโนโลยีด้วยตนเอง</p>
              <div class="action-btn-container">
                 <a href="/path-to-your-pdf/physics-course.pdf" target="_blank" class="outline-btn">
                    หลักสูตรฟิสิกส์อุตสาหกรรม <span class="arrow-icon">➔</span>
                 </a>
              </div>
            </div>
          </div>

          <div class="content-box">
            <h2 class="box-title text-navy">Career Prospects</h2>
            <div class="grid-2-col">
              <div class="col-left">
                <div class="career-group">
                  <h4>ด้านการผลิต ควบคุมคุณภาพ และความน่าเชื่อถือ (Manufacturing, Quality & Reliability)</h4>
                  <ul>
                    <li>วิศวกรอุตสาหการ (Industrial Engineer)</li>
                    <li>วิศวกรกระบวนการ (Process Engineer)</li>
                    <li>วิศวกรควบคุมคุณภาพ (QC Engineer)</li>
                    <li>วิศวกรทดสอบความน่าเชื่อถือและวิเคราะห์ความเสียหาย (Reliability & Test Engineer / Failure Analysis Engineer)</li>
                  </ul>
                </div>
                <div class="career-group">
                  <h4>ด้านบริหารและธุรกิจ (Business & Management)</h4>
                  <ul>
                    <li>ผู้ประกอบการทางธุรกิจเทคโนโลยี (Tech Entrepreneur)</li>
                  </ul>
                </div>
              </div>
              <div class="col-right">
                <div class="career-group">
                  <h4>ด้านวิศวกรรมเฉพาะทางและวัสดุศาสตร์ (Specialized Engineering & Material Science)</h4>
                  <ul>
                    <li>วิศวกรไฟฟ้า (Electrical Engineer)</li>
                    <li>วิศวกรแสง (Optical Engineer)</li>
                    <li>นักวิทยาศาสตร์/วิศวกรวัสดุ (Material Scientist/Engineer)</li>
                  </ul>
                </div>
                <div class="career-group">
                  <h4>ด้านวิจัย ข้อมูล และการศึกษา (Research, Data & Education)</h4>
                  <ul>
                    <li>นักวิจัย (Researcher)</li>
                    <li>นักวิทยาศาสตร์ข้อมูล (Data Scientist)</li>
                    <li>นัก STEM ศึกษา (STEM Educator)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </transition>

      <div class="history-section">
        <h2 class="history-title">History of IoTE KMITL</h2>
        <div class="timeline-container">
          <div class="timeline-line"></div>
          
          <div class="timeline-endpoint start-endpoint">
            <div class="endpoint-dot"></div>
            <div class="endpoint-text">start</div>
          </div>
          
          <div class="timeline-item" v-for="(item, index) in historyData" :key="index" :class="item.align">
            <div class="timeline-dot"></div>
            <div class="timeline-content-wrapper">
               <div class="timeline-year">{{ item.year }}</div>
               <div class="timeline-text">
                 <p v-for="(line, i) in item.text" :key="i">{{ line }}</p>
               </div>
            </div>
          </div>

          <div class="timeline-endpoint now-endpoint">
            <div class="endpoint-dot"></div>
            <div class="endpoint-text">NOW</div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('iot')
const contentArea = ref(null)

const selectTab = (tabName) => {
  activeTab.value = tabName
  setTimeout(() => {
    if (contentArea.value) {
      contentArea.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, 100)
}

const historyData = [
  {
    year: '1974',
    align: 'left',
    text: [
      'เปิดรับนักศึกษารุ่นแรกในชื่อ "ภาควิชาเทคโนโลยีการเกษตร"',
      'คณะวิศวกรรมศาสตร์ สจล.',
      'เป็นหลักสูตรประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.)',
      'และประกาศนียบัตรวิชาชีพเทคนิค (ปวท.) (รอบเช้า)'
    ]
  },
  {
    year: '1975',
    align: 'right',
    text: [
      'ได้รับอนุมัติหลักสูตรระดับปริญญาตรี',
      'จัดการเรียนการสอน 3 ปี สำหรับผู้จบ ปวส.',
      '(ต่อเนื่อง/นักศึกษาภาคสมทบ/รอบค่ำ)'
    ]
  },
  {
    year: '1998',
    align: 'left',
    text: [
      'ได้รับอนุมัติเปลี่ยนชื่อเป็น "วิศวกรรมสารสนเทศ" (วท.บ.)',
      'ขยายเวลาเรียนเป็น 4 ปี',
      'เปิดรับผู้จบ ปวช. และ ม.6 (สายวิทย์-คณิต)',
      'เริ่มดำเนินการโครงการเพิ่มโอกาสทางการศึกษาให้แก่สถานประกอบการ'
    ]
  },
  {
    year: '2001',
    align: 'right',
    text: [
      '4 พฤศจิกายน วางศิลาฤกษ์อาคารปฏิบัติการรวมที่ใช้เป็นชื่อว่า',
      '"อาคารวิศวกรรมสารสนเทศ"',
      'ปรับปรุงหลักสูตรใหม่ เน้นความรู้ครอบคลุม คอมพิวเตอร์,',
      'โทรคมนาคม, อิเล็กทรอนิกส์, การจัดการข้อมูล',
      'เพื่อรองรับตลาดแรงงาน IT'
    ]
  },
  {
    year: '2010',
    align: 'left',
    text: [
      'คณะวิศวกรรมศาสตร์ปรับโครงสร้างใหม่',
      'ยุบรวมภาควิชาวิศวกรรมคอมพิวเตอร์และวิศวกรรมสารสนเทศ',
      'เปลี่ยนชื่อเป็น "ภาควิชาวิศวกรรมคอมพิวเตอร์"'
    ]
  },
  {
    year: '2020',
    align: 'right',
    text: [
      'ขอเปิดนักศึกษาในภาควิชา เพื่อเตรียมปรับปรุงหลักสูตรครั้งใหญ่'
    ]
  },
  {
    year: '2021',
    align: 'left',
    text: [
      'ปรับปรุงและเปลี่ยนชื่อหลักสูตรเป็น',
      '"วิศวกรรมระบบไอโอทีและสารสนเทศ"',
      'มีแผนการเรียนแบบ Disruptive Curriculum เพื่อความทันสมัย',
      'สร้างความร่วมมือกับคณะ (ทำหลักสูตร 2 ปริญญา',
      'ร่วมกับสาขาวิชาฟิสิกส์ คณะวิทยาศาสตร์)',
      'เปิดหลักสูตรวิชาโท (Minor Program)',
      'ข้ามสาขาเพื่อให้ตอบโจทย์ความสนใจและสร้างความหลากหลาย'
    ]
  }
]
</script>

<style scoped>
.academics-page {
  background-color: #fdfbf7;
  color: #333;
  font-family: 'Sarabun', 'Kanit', sans-serif;
}
.hero-fullscreen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}
.title-container {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.main-title {
  font-size: 4.5rem;
  color: #1e293b;
  margin: 0;
  font-weight: 800;
  letter-spacing: 3px;
}
.tab-buttons-wrapper {
  background-color: #e9ecef;
  padding: 20px 30px;
  border-radius: 20px 20px 0 0;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}
.tab-buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}
.tab-buttons button {
  flex: 1;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background: linear-gradient(to bottom, #ffe4cc, #ffcc99);
  color: #333;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.3s;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}
.tab-buttons button:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 10px rgba(0,0,0,0.1);
}
.tab-buttons button.active {
  background: linear-gradient(to bottom, #ffcc99, #ffb366);
  border: 1px solid #e68a00;
  color: #000;
}
.content-wrapper {
  max-width: 1000px;
  margin: 40px auto; 
  padding: 0 20px;
}
.content-box {
  background-color: #f1f3f5;
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 30px;
}
.text-center-box {
  text-align: center;
  margin-bottom: 40px;
}
.text-center-box h2 {
  font-size: 1.5rem;
  color: #1e3a8a;
}
.text-center-box h3 {
  font-size: 1.1rem;
  font-weight: normal;
  margin: 10px 0 20px;
}
.desc-text {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}
.box-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}
.text-navy {
  color: #1e3a8a;
}
.custom-list {
  padding-left: 20px;
}
.custom-list li {
  margin-bottom: 15px;
  line-height: 1.6;
}
.grid-2-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}
.career-group h4 {
  font-size: 0.95rem;
  color: #333;
  margin-bottom: 10px;
}
.career-group ul {
  padding-left: 20px;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 20px;
}
.image-text-box {
  display: flex;
  background-color: #f1f3f5;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 40px;
}
.img-area {
  flex: 1;
  background-color: #2c3e50;
}
.placeholder-img {
  width: 100%;
  height: 100%;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  padding: 20px;
}
.students-bg {
  background-color: #a0aec0;
}
.text-area {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
}
.text-area p {
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}
.action-btn-container {
  text-align: right;
  margin-top: 15px;
}
.outline-btn {
  display: inline-flex;
  align-items: center;
  background-color: transparent;
  border: 2px solid #ff9800;
  color: #333;
  padding: 6px 6px 6px 24px;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 500;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
}
.outline-btn:hover {
  background-color: #fef8f0;
  color: #ff9800;
}
.arrow-icon {
  background-color: #ff9800;
  color: white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-left: 15px;
  transition: transform 0.3s ease;
}
.outline-btn:hover .arrow-icon {
  transform: translateX(3px);
}

/* ================== ส่วนจัดการ Card รูปภาพให้เท่ากัน ================== */
.course-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
  align-items: stretch; /* ให้กล่องทุกใบยืดสูงเท่ากันตามกล่องที่สูงที่สุด */
}

.course-card {
  background: white;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; 
}

.card-img {
  background-color: #edf2f7;
  color: #718096;
  border-radius: 12px;
  height: 160px; /* กำหนดความสูงของกรอบรูปให้ตายตัว */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  flex-shrink: 0; /* ป้องกันไม่ให้รูปถูกบีบให้เล็กลง */
}

.small-btn {
  font-size: 0.9rem;
  padding: 4px 4px 4px 16px;
  width: fit-content;
  margin: auto;
}
.small-btn .arrow-icon {
  width: 28px;
  height: 28px;
  font-size: 1rem;
  margin-left: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.history-section {
  margin-top: 60px;
  padding-bottom: 50px;
}
.history-title {
  text-align: center;
  font-size: 2rem;
  color: #2c3e50;
  margin-bottom: 40px;
  font-weight: bold;
}
.timeline-container {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0; 
}
.timeline-line {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 15px;    
  bottom: 15px; 
  width: 2px;
  background-color: #ff9800;
  z-index: 1;
}

.timeline-endpoint {
  position: relative;
  display: flex;
  align-items: center;
  z-index: 2;
}
.start-endpoint {
  margin-bottom: 40px; 
}
.now-endpoint {
  margin-top: 40px; 
}
.endpoint-dot {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  background-color: #ff9800; 
  border-radius: 50%;
}
.endpoint-text {
  width: 50%;
  margin-left: 50%;
  padding-left: 40px; 
  font-weight: bold;
  font-size: 1.5rem;
  color: #2c3e50; 
}

.timeline-item {
  display: flex;
  width: 100%;
  position: relative;
  margin-bottom: 50px;
  z-index: 2;
}
.timeline-item.left {
  justify-content: flex-start;
}
.timeline-item.right {
  justify-content: flex-end;
}
.timeline-dot {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 16px;
  height: 16px;
  background-color: white;
  border: 3px solid #ff9800;
  border-radius: 50%;
  z-index: 3;
}
.timeline-content-wrapper {
  width: 50%;
  display: flex;
  align-items: flex-start;
}
.timeline-item.left .timeline-content-wrapper {
  padding-right: 40px; 
  flex-direction: row-reverse; 
  text-align: right;
}
.timeline-item.right .timeline-content-wrapper {
  padding-left: 40px; 
  flex-direction: row; 
  text-align: left;
}
.timeline-year {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  line-height: 1.1;
  flex-shrink: 0;
}
.timeline-item.left .timeline-year {
  margin-left: 20px;
}
.timeline-item.right .timeline-year {
  margin-right: 20px;
}
.timeline-text {
  font-size: 0.9rem;
  color: #555;
  line-height: 1.6;
}
.timeline-text p {
  margin: 0 0 5px 0;
}

@media (max-width: 768px) {
  .grid-2-col, .course-cards-grid {
    grid-template-columns: 1fr;
  }
  .image-text-box {
    flex-direction: column;
  }
  .timeline-line {
    left: 20px;
  }
  .timeline-dot {
    left: 20px;
  }
  .timeline-item.left, .timeline-item.right {
    justify-content: flex-end;
  }
  .timeline-content-wrapper {
    width: calc(100% - 40px);
    padding-left: 40px !important;
    padding-right: 0 !important;
    flex-direction: column !important;
    text-align: left !important;
  }
  .timeline-item.left .timeline-year, .timeline-item.right .timeline-year {
    margin: 0 0 10px 0;
  }
  .endpoint-dot {
    left: 20px;
    transform: translateX(-50%);
  }
  .endpoint-text {
    width: 100%;
    margin-left: 0;
    padding-left: 50px;
  }
}
</style>