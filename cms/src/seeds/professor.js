'use strict';

// ฟังก์ชันสำหรับแปลง Array ธรรมดาให้เป็นโครงสร้าง Rich Text (List) ของ Strapi Blocks
const buildRichTextList = (items) => {
  if (!items || items.length === 0) return [];
  return [{
    type: "list",
    format: "unordered",
    children: items.map(text => ({
      type: "list-item",
      children: [{ type: "text", text }]
    }))
  }];
};

module.exports = async (strapi) => {
  try {
    const count = await strapi.entityService.count('api::professor.professor');
    if (count > 0) {
      console.log("ℹ️ Professors/Staff already exist");
      return;
    }
    
    // ==========================================
    // 1. ข้อมูลอาจารย์และบุคลากรภาควิชา IoT
    // ==========================================
    const iotStaff = [
      {
        name_th: "ผศ.ดร.พิกุลแก้ว ตังติสานนท์", name_en: "Asst.Prof.Dr.Pikulkaew Tangtisanon", position: "หัวหน้าภาควิชา", email: "pikulkaew.ta@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["วศ.บ. (วิศวกรรมสารสนเทศ) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วศ.ม. (วิศวกรรมสารสนเทศ) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "D.Eng. (Science and Technology) Tokai University, JAPAN"]),
        expertise: buildRichTextList(["Web Application", "Mobile Application", "Information Security"]),
      },
      {
        name_th: "รศ.ดร.บุณย์ชนะ ภู่ระหงษ์", name_en: "Assoc.Prof.Dr.Boonchana Purahong", position: "ประธานหลักสูตรวิศวกรรมระบบไอโอทีและสารสนเทศ", email: "boonchana.pu@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["อส.บ. (เทคโนโลยีอิเล็กทรอนิกส์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วศ.ม. (วิศวกรรมสารสนเทศ) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["Microprocessor Application", "Microcontroller", "Robotic", "Internet of Things and Smart System"]),
      },
      {
        name_th: "ศ.ดร. อภิรัฐ ศิริธราธิวัตร", name_en: "Prof. Dr. Apirat Siritaratiwat", position: "รองหัวหน้าภาควิชา (ฝ่ายวิจัยและนวัตกรรม)", 
        department: "IoT", role: "Faculty", education: [], expertise: [],
      },
      {
        name_th: "ผศ.ดร.วันวิสา ชัชวงษ์", name_en: "Asst.Prof.Dr.Vanvisa Chutchavong", position: "รองหัวหน้าภาควิชา (ฝ่ายการเงิน)", email: "vanvisa.ch@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["อส.บ. เกียรตินิยมอันดับ 2 (เทคโนโลยีอิเล็กทรอนิกส์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วศ.ม. (วิศวกรรมสารสนเทศ) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วศ.ด. (วิศวกรรมไฟฟ้า) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["Electronic, Bernstein Filter, Railway Signaling and Operation, Pattern recognition, Railway Communications"]),
      },
      {
        name_th: "ผศ.ดร.นัชนัยน์ รุ่งเหมือนฟ้า", name_en: "Asst.Prof.Dr.Natchanai Roongmuanpha", position: "รองหัวหน้าภาควิชา (ฝ่ายต่างประเทศและกิจกรรมคณะ)", email: "natchanai.ro@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["B.Eng.(Electronics Engineering) King Mongkuts Institute of Technology Ladkrabang", "M.Eng.(Control Engineering) King Mongkuts Institute of Technology Ladkrabang", "D.Eng.(Electrical Engineering) King Mongkuts Institute of Technology Ladkrabang"]),
        expertise: buildRichTextList(["immittance function simulators", "active analog filters", "oscillator design", "chaotic circuit realization"]),
      },
      {
        name_th: "ผศ.ดร.เกล็ดดาว สัตย์เจริญ", name_en: "Asst.Prof.Dr.Kleddao Satcharoen", position: "อาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายต่างประเทศและกิจกรรมคณะ)", email: "kleddao.sa@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["Doctoral of Philosophy in Computer Science, University of Buckingham, UK", "Master of Science in Computing (MERIT), University of Buckingham, UK", "Master of Art (Political Science), THAILAND", "Bachelor of Science in Management Technology, KMITL, THAILAND"]),
        expertise: buildRichTextList(["Human computer interaction", "User Interfaces"]),
      },
      {
        name_th: "ผศ.นิจจารีย์ สัตยารักษ์", name_en: "Asst.Prof.Nitjaree Satayarak", position: "รองหัวหน้าภาควิชา (ฝ่ายกิจการนักศึกษา)", email: "nitjaree.sa@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["วศ.บ. (วิศวกรรมคอมพิวเตอร์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วศ.ม. (วิศวกรรมไฟฟ้า) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["Software Engineering", "Distributed Testing System"]),
      },
      {
        name_th: "ผศ.ดร.ธนวิชญ์ อนุวงค์พินิจ", name_en: "Asst.Prof.Dr.Thanavit Anuwongpinit", position: "รองหัวหน้าภาควิชา (ฝ่ายวิชาการ)", email: "thanavit.an@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["B.Eng.(Information Engineering) King Mongkuts Institute of Technology Ladkrabang", "M.Eng.(Information Engineering) King Mongkuts Institute of Technology Ladkrabang", "D.Eng.(Electrical Engineering) King Mongkuts Institute of Technology Ladkrabang"]),
        expertise: buildRichTextList(["Microprocessor Application, Internet of Things, Embedded Systems, Integrated System, Railway Signaling Communication and Operation"]),
      },
      {
        name_th: "ดร.สุวิไล พุ่มโพธิ์", name_en: "Dr.Suwilai Phumpho", position: "รองหัวหน้าภาควิชา (ฝ่ายกิจการภายนอก)", 
        department: "IoT", role: "Faculty", education: [], expertise: [],
      },
      {
        name_th: "ผศ.ดร.อรรถพล ป้อมสถิตย์", name_en: "Asst.Prof.Dr.Auttapon Pomsathit", position: "อาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายกิจการภายนอก)", email: "auttapon.po@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["B.Eng.(Electronics Engineering) King Mongkuts Institute of Technology Ladkrabang", "M.Eng.(Information Engineering) King Mongkuts Institute of Technology Ladkrabang", "D.Eng.(Electrical Engineering) King Mongkuts Institute of Technology Ladkrabang"]),
        expertise: buildRichTextList(["Cyber Security", "Internetworkind Design", "Information Security"]),
      },
      {
        name_th: "ผศ.ดร.พนารัตน์ เชิญถนอมวงศ์", name_en: "Asst.Prof.Dr.Panarat Cherntanomwong", position: "อาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายกิจการภายนอก)",
        department: "IoT", role: "Faculty", education: [], expertise: [],
      },
      {
        name_th: "ผศ.สรพงษ์ วชิรรัตนพรกุล", name_en: "Asst.Prof.Sorapong Wachirarattanapornkul", position: "อาจารย์ประจำภาควิชา (ผู้ช่วยฝ่ายกิจการนักศึกษา)", email: "sorapong.wa@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["อส.บ.(เทคโนโลยีอิเล็กทรอนิกส์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วศ.ม. (วิศวกรรมไฟฟ้า) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["Analog and Digital Filter", "Embedded System", "RFID and Application", "Pattern recognition", "Information for Energy"]),
      },
      {
        name_th: "รศ.ดร.อรรถสิทธิ์ หล่าสกุล", name_en: "Assoc.Prof.Dr.Attasit Lasakul", position: "อาจารย์พิเศษ", email: "attasit.la@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["อส.บ. (เทคโนโลยีอิเล็กทรอนิกส์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วศ.ม. (วิศวกรรมไฟฟ้า) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "D.Eng. (Electrical Engineering) Tokai University, JAPAN"]),
        expertise: buildRichTextList(["Digital Processing", "Image Watermarking", "Embedded Systems", "Image Processing", "Machine Vision"]),
      },
      {
        name_th: "ผศ.ไพศาล สิทธิโยภาสกุล", name_en: "Asst.Prof.Paisan Sithiyopasakul", position: "อาจารย์พิเศษ", email: "paisan-si@kmitl.ac.th",
        department: "IoT", role: "Faculty",
        education: buildRichTextList(["อส.บ. (เทคโนโลยีคอมพิวเตอร์อุตสาหกรรม) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วศ.ม. (วิศวกรรมไฟฟ้า) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["Wireless Communication", "Microprocessor Applications", "Digital Filter"]),
      },
      {
        name_th: "นายธนาตย์ จอมใจเอกชน", name_en: "", position: "เจ้าหน้าที่วิศวกร",
        department: "IoT", role: "Staff", education: [], expertise: [],
      },
      {
        name_th: "นายธีรสิทธิ์ โท้ทอง", name_en: "", position: "เจ้าหน้าที่วิศวกร",
        department: "IoT", role: "Staff", education: [], expertise: [],
      }
    ];

    // ==========================================
    // 2. ข้อมูลอาจารย์ภาควิชา Physics
    // ==========================================
    const physicsFaculty = [
      {
        name_th: "รศ.ดร.ภัทรียา ดำรงศักดิ์", name_en: "Assoc.Prof.Dr.Pattareeya Damrongsak", position: "หัวหน้าภาควิชาฟิสิกส์อุตสาหกรรม", email: "pattareeya.da@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["Doctor of Philosophy/Engineering Materials University of Southampton อังกฤษ"]),
        expertise: buildRichTextList(["OPTICAL SPECTROSCOPY", "SILICON PHOTOVOLTAICS", "FLUORESCENT CONCENTRATORS", "THIN FILM LUMINESCENCE", "FLUORESCENCE SPECTROSCOPY"])
      },
      {
        name_th: "รศ.ดร.สาหร่าย เล็กชะอุ่ม", name_en: "Assoc.Prof.Dr.Sarai Lekchaaum", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "sarai.le@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["ปริญญาโท/วศ.ม.(นิวเคลียร์เทคโนโลยี) จุฬาลงกรณ์มหาวิทยาลัย"]),
        expertise: buildRichTextList(["STIRLING ENGINE", "TISSUE", "SIMULATION", "MEASURING METHOD", "INTERNET OF THING TECHNOLOGY"])
      },
      {
        name_th: "รศ.ดร.รัชนก สมพรเสน่ห์", name_en: "Assoc.Prof.Dr.Ratchanok Somphonsane", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "ratchanok.so@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["Doctor of Philosophy/Physics, University at Buffalo, The State University of NY"]),
        expertise: buildRichTextList(["NANOELECTRONICS", "2D MATERIALS", "GRAPHENE", "QUANTUM TRANSPORT PHENOMENA", "ELECTRICAL CHARACTERIZATION"])
      },
      {
        name_th: "ผศ.ดร.ศ.ทิพวรรณ คล้ายบุญมี", name_en: "Asst. Prof. Dr. S.Tipawan Khlayboonme", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "s.tipawan.kh@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["วท.บ. ฟิสิกส์ประยุกต์, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "วท.ม. ฟิสิกส์ประยุกต์, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง", "ปร.ด. ฟิสิกส์ประยุกต์, สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: []
      },
      {
        name_th: "รศ.ดร.อาภากรณ์ สกุลการะเวก", name_en: "Assoc.Prof.Dr.Aparporn Sakulkalavek", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "aparporn.sa@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["วิทยาศาสตรดุษฎีบัณฑิต/ฟิสิกส์ จุฬาลงกรณ์มหาวิทยาลัย"]),
        expertise: buildRichTextList(["THIN FILM", "THERMOELECTRIC MATERIAL", "THERMAL PROPERTY", "MATERIAL SCIENCE", "MATERIAL CHARACTERIZATION"])
      },
      {
        name_th: "ดร.พิชชานันท์ ธีเศรษฐ์โศภน", name_en: "Dr. Pichanan Teesetsopon", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "pichanan.te@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["วท.บ. ฟิสิกส์, มหาวิทยาลัยเกษตรศาสตร์", "วท.ม. ฟิสิกส์เชิงเคมี, มหาวิทยาลัยมหิดล", "Ph.D. Energy, สถาบันเทคโนโลยีแห่งเอเชีย"]),
        expertise: []
      },
      {
        name_th: "ผศ.ดร.เมตยา กิติวรรณ", name_en: "Asst.Prof.Dr.Mettaya Kitiwan", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "mettaya.ki@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["Ph.D.(Materials Processing), Tohoku University, Japan"]),
        expertise: buildRichTextList(["NANO-COATING BY ROTARY CHEMICAL VAPOR DEPOSITION", "SINTERING OF ADVANCED CERAMICS", "MICROWAVE PROCESSING OF MATERIALS", "HYDROGEN SEPARATION MEMBRANE"])
      },
      {
        name_th: "ผศ.ธนภรณ์ ลีลาวัฒนานนท์", name_en: "Asst.Prof.Thanaporn Leelawattananon", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "tanaporn.le@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["วท.ม./เทคโนโลยีสารสนเทศ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["MODELING AND SIMULATION", "SURFACE PLASMONS", "OPTICAL DATA COMMUNICATION"])
      },
      {
        name_th: "ผศ.สุรศักดิ์ พิพัฒน์ศาสตร์", name_en: "Asst.Prof.Surasak Pipatsart", position: "อาจารย์ผู้รับผิดชอบหลักสูตร",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["วท.ม.(ฟิสิกส์ประยุกต์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["OPTICS", "ENERGY"])
      },
      {
        name_th: "ผศ.ดร.ประธาน บูรณศิริ", name_en: "Asst.Prof.Dr.Prathan Buranasiri", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "prathan.bu@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["Doctor of Philosophy/Electrical Engineering ,University of Dayton, USA"]),
        expertise: buildRichTextList(["QUANTITATIVE PHASE IMAGING", "DIGITAL HOLOGRAPHY", "NONLINEAR OPTIC", "LASER STABILIZEATION", "PHOTONIC CRYSTAL", "METAMATERIAL", "METAMATERIAL-MEDICAL PHYSICS", "APPLICATIONS OF SYNCHROTRON RADIATION"])
      },
      {
        name_th: "อ.ธรรมรัตน์ แต่งตั้ง", name_en: "Aj.Thammarat Taengtang", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "thammarat.ta@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["วศ.ม.วิศวกรรมไฟฟ้า สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["IMAGE PROCESSING", "DATA PROCESSING", "NP-HARD PROBLEM", "ARTIFICIAL INTELLIGENCE", "OPTIMIZATION PROBLEM"])
      },
      {
        name_th: "อ.สุรชาติ กมลดิลก", name_en: "Aj.Surachart Kamoldilok", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "kamoldiloks@gmail.com",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["ปริญญาโท/วท.ม.(สาขาฟิสิกส์ประยุกต์) สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["LASERS", "OPTICAL INSTRUMENTS", "PHOTONICS", "FORENSIC SCIENCE", "PHYSICS EDUCATION"])
      },
      {
        name_th: "ผศ.ดร.ณัฐพร พรหมรส", name_en: "Asst.Prof.Dr.Nathaporn Promros", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "kpnathap@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["Doctor of Engineering/Applied Science fro Electronics and Materials, Kyushu University. ญี่ปุ่น"]),
        expertise: buildRichTextList(["THIN FILM", "THERMOELECTRIC MATERIAL", "THERMAL PROPERTY", "MATERIAL SCIENCE", "MATERIAL CHARACTERIZATION"])
      },
      {
        name_th: "รศ.ดร.เชษฐา รัตนพันธ์", name_en: "Assoc.Prof.Dr.Chesta Ruttanapun", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "chesta.ru@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["ปริญญาดุษฎีบัณฑิต/ฟิสิกส์ประยุกต์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["SYNTHESIS", "CHARACTERIZATION", "IMPROVEMENT OF THERMOELECTRIC MATERIALS"])
      },
      {
        name_th: "รศ.ดร.กฤษกร โล่เจริญรัตน์", name_en: "Assoc.Prof.Dr.Kitsakorn Locharoenrat", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "kitsakorn.lo@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["Ph.D./ Physical Materials Science , Japan Advanced Institute of Science and Technology, 2550, Japan"]),
        expertise: buildRichTextList(["CANCER", "PLASMONIC", "NANOPARTICLES"])
      },
      {
        name_th: "ผศ.ดร.ภาณุพล โขลนกระโทก", name_en: "Asst.Prof.Dr.Bhanupol Klongratog", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "bhanupol.kl@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["วิศวกรรมศาสตรดุษฎีบัณฑิต/วิศวกรรมไฟฟ้า สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: buildRichTextList(["MEASUREMENT AND INSTRUMENTATIONS", "FORENSIC SCIENCE", "IMAGE PROCESSING", "SPORT SCIENCE", "COMPUTER AND ELECTRONICS IN AGRICULTURE"])
      },
      {
        name_th: "ผศ.ดร.พิศาล ศรีราช", name_en: "Asst.Prof.Dr.Pisan Sukwisute", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "pisan.su@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["ปริญญาดุษฎีบัณฑิต/ฟิสิกส์ มหาวิทยาลัยสงขลานครินทร์"]),
        expertise: buildRichTextList(["PIEZOELECTRIC MATERIAL", "MATERIALS SCIENCE", "ENERGY HARVESTING SENSOR", "MATERIAL CHARACTERIZATION"])
      },
      {
        name_th: "ดร.ชินพรรธน์ รัตนศิริวิทย์", name_en: "Dr.Chinnapat Ruttanasirawit", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "woraka.ne@kmitl.ac.th", 
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["Ph.D. Physics North Carolina State University, USA"]),
        expertise: buildRichTextList(["SURFACE PLASMONIC RESONANCE", "NANOTECHNOLOGY", "OPTICAL SENSOR", "SMART FARMING", "STEM EDUCATION"])
      },
      {
        name_th: "ผศ.ดร.กีรยุทธ์ ศรีนวลจันทร์", name_en: "Dr.Keerayoot Srinuanjan", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "keerayoot.sr@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["วท.ม.(ฟิสิกส์ประยุกต์)/ฟิสิกส์ประยุกต์ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง"]),
        expertise: []
      },
      {
        name_th: "ดร.วิทูรย์ ยินดีสุข", name_en: "Dr.Witoon Yindeesuk", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "witoon.yi@kmitl.ac.th",
        department: "Physics", role: "Faculty",
        education: buildRichTextList(["Doctor of Philosophy/Engineering Science, The University of Electro-Communications, Japan"]),
        expertise: buildRichTextList(["SOLAR CELLS", "QUANTUM DOTS", "SOLAR ENERGY", "THIN FILMS", "SILAR METHODS"])
      },
      {
        name_th: "ดร.ณัฏกฤษ สมดอก", name_en: "Dr.Nuttakrit Somdock", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "nuttakrit.so@kmitl.ac.th",
        department: "Physics", role: "Faculty", education: [], expertise: []
      },
      {
        name_th: "ดร.ลัญจกร ตันนุกิจ", name_en: "Dr.Lunchakurn Tannukij", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "Lunchakurn.ta@kmitl.ac.th",
        department: "Physics", role: "Faculty", education: [], expertise: []
      },
      {
        name_th: "ดร.เฉลิมพล รุจธดาวงศ์", name_en: "Dr. Chalermpol Rudradawong", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "chalermpol.ru@kmitl.ac.th",
        department: "Physics", role: "Faculty", education: [], expertise: []
      },
      {
        name_th: "ดร.ยงยุทธ แก้วจำรัส", name_en: "Dr. Yongyut Kaewjumras", position: "อาจารย์ผู้รับผิดชอบหลักสูตร", email: "yongyut.ka@kmitl.ac.th",
        department: "Physics", role: "Faculty", education: [], expertise: []
      }
    ];

    // ==========================================
    // 3. ข้อมูลบุคลากร/เจ้าหน้าที่ (Staff) ภาควิชา Physics
    // ==========================================
    const physicsStaff = [
      {
        name_th: "นางสาวสายสุดาวัลย์ สุทธิญาณ", name_en: "Ms.Saisudawan Suttiyan", position: "นักวิทยาศาสตร์", email: "saisudawan1@hotmail.com",
        department: "Physics", role: "Staff", education: [], expertise: []
      },
      {
        name_th: "นางพิมพร อ่อนละออ", name_en: "Mrs.Pimporn Onlaor", position: "นักวิทยาศาสตร์", email: "pimporn.be@kmitl.ac.th",
        department: "Physics", role: "Staff", education: [], expertise: []
      },
      {
        name_th: "นางสาวนลิตา สว่างจิตต์", name_en: "Ms.Nalita Sawangjit", position: "นักวิทยาศาสตร์", email: "nalita.sa@kmitl.ac.th",
        department: "Physics", role: "Staff", education: [], expertise: []
      },
      {
        name_th: "นางสาวเกศณี เกตุนวม", name_en: "Ms.Kesanee Ketnuam", position: "เจ้าหน้าที่บริหารงานทั่วไป เลขานุการ", email: "kesanee.ke@kmitl.ac.th",
        department: "Physics", role: "Staff", education: [], expertise: []
      },
      {
        name_th: "นายวีระพันธ์ ทิพาพงศ์", name_en: "Mr.Weraphan Tipaphong", position: "นักวิทยาศาสตร์", email: "weraphan.ti@kmitl.ac.th",
        department: "Physics", role: "Staff", education: [], expertise: []
      },
      {
        name_th: "นายชวนนท์ มะโน", name_en: "Mr.Chawanon Mano", position: "นักวิทยาศาสตร์", email: "chawanon.ma@kmitl.ac.th",
        department: "Physics", role: "Staff", education: [], expertise: []
      },
      {
        name_th: "นายสาโรจน์ ชูอำไพ", name_en: "Mr.Saorj Chooampai", position: "ผู้ปฏิบัติงานวิทยาศาสตร์", email: "saroj.ch@kmitl.ac.th",
        department: "Physics", role: "Staff", education: [], expertise: []
      }
    ];

    // รวมข้อมูลทั้งหมด
    const allProfessorsAndStaff = [...iotStaff, ...physicsFaculty, ...physicsStaff];

    for (const person of allProfessorsAndStaff) {
      await strapi.entityService.create(
        'api::professor.professor',
        {
          data: {
            ...person,
            publishedAt: new Date(),
          },
        }
      );
      console.log(`✅ Created: ${person.name_th} (${person.department} / ${person.role})`);
    }
    console.log(`🎉 Seeding complete! Added ${allProfessorsAndStaff.length} records.`);
  } catch (err) {
    console.error("❌ Seed Error:", err);
  }
};