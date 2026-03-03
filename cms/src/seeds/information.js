'use strict';

module.exports = async (strapi) => {
  try {

    const count = await strapi.entityService.count(
      'api::information.information'
    );

    if (count > 0) {
      console.log("ℹ️ Informations already exist");
      return;
    }

    const informations = [

      // ================= ข่าว 1 =================
      {
        title: "กิจกรรมนำเสนอและแลกเปลี่ยนงานวิจัยระหว่างนักศึกษา Chuo University และ ภาควิชาฯ IoTE สจล.",
        excerpt: "เปิดเวทีแลกเปลี่ยนงานวิจัยระดับนานาชาติ! นักศึกษา IoTE สจล. และ Chuo University ร่วมโชว์ผลงานและต่อยอดแนวคิดทางวิชาการอย่างสร้างสรรค์",

        full_content: [
          {
            type: "paragraph",
            children: [{
              type: "text",
              text: "เมื่อวันที่ 9 กุมภาพันธ์ ที่ผ่านมา ภาควิชาวิศวกรรมไอโอทีและสารสนเทศ คณะวิศวกรรมศาสตร์ สจล. ร่วมกับ Chuo University จัดกิจกรรมแลกเปลี่ยนทางวิชาการ โดยมีนักศึกษาจากทั้งสองสถาบันจำนวน 34 คน เข้าร่วมนำเสนอผลงานวิจัยและแลกเปลี่ยนมุมมองทางวิชาการร่วมกันอย่างเข้มข้นและสร้างสรรค์"
            }]
          },
          {
            type: "paragraph",
            children: [{
              type: "text",
              text: "กิจกรรมครั้งนี้ได้รับเกียรติจาก Prof. Dr. Jun Lio จาก Chuo University และ ผศ.ดร.เกล็ดดาว สัตย์เจริญ จากภาควิชาวิศวกรรมไอโอทีและสารสนเทศ สจล. ร่วมเป็นผู้ดำเนินรายการและให้ข้อเสนอแนะอย่างใกล้ชิด บรรยากาศเต็มไปด้วยการเรียนรู้และความร่วมมือ"
            }]
          }
        ],
        date: new Date(),
      },

      // ================= ข่าว 2 =================
      {
        title: "ขอแสดงความยินดีกับทีม DemocraSee! นักศึกษา IoTE สจล. คว้า 2 รางวัลใหญ่จากเวที Hackathon ปราบซื้อเสียง",
        excerpt: "สุดปัง! นวัตกรคนรุ่นใหม่แห่ง IoTE สจล. โชว์พลังไอเดียสร้างสรรค์นวัตกรรมแก้ปัญหาการซื้อเสียง คว้า 2 รางวัลใหญ่จากเวทีระดับประเทศ",

        full_content: [
          {
            type: "paragraph",
            children: [{
              type: "text",
              text: "ภาควิชาวิศวกรรมไอโอทีและสารสนเทศ คณะวิศวกรรมศาสตร์ สจล. ขอแสดงความชื่นชมและร่วมยินดีกับทีม DemocraSee ที่สามารถคว้ารางวัลจากการแข่งขัน Hackathon ปราบซื้อเสียง ณ มหาวิทยาลัยธรรมศาสตร์ ศูนย์รังสิต"
            }]
          },
          {
            type: "list",
            format: "unordered",
            children: [
              { type: "list-item", children: [{ type: "text", text: "รางวัลรองชนะเลิศอันดับที่ 1" }] },
              { type: "list-item", children: [{ type: "text", text: "รางวัล Popular Vote" }] }
            ]
          },
          {
            type: "paragraph",
            children: [{
              type: "text",
              text: "การแข่งขันมุ่งเน้นการนำเสนอไอเดียและนวัตกรรมเพื่อแก้ไขปัญหาการซื้อเสียงอย่างสร้างสรรค์และสามารถนำไปใช้ได้จริง"
            }]
          }
        ],
        date: new Date(),
      },

      // ================= ข่าว 3 =================
      {
        title: "รับสมัคร นศ. ป.ตรี วิศวะฯ IoT & IT ลาดกระบัง (ปิดรับ 20 ม.ค. 69)",
        excerpt: "โค้งสุดท้าย! #Dek69 ห้ามพลาด โอกาสก้าวสู่การเป็นนวัตกรด้าน IoT และ IT ที่วิศวฯ ลาดกระบัง",

        full_content: [
          {
            type: "paragraph",
            children: [{
              type: "text",
              text: "โอกาสสุดท้ายสำหรับน้องๆ #Dek69 ที่อยากเรียนวิศวกรรมไอโอทีและสารสนเทศ ที่ สจล. รีบยื่นใบสมัครก่อนวันที่ 20 มกราคม 2569"
            }]
          },
          {
            type: "paragraph",
            children: [{
              type: "text",
              text: "สมัครได้ที่: https://admission.reg.kmitl.ac.th/"
            }]
          }
        ],
        date: new Date(),
      },

      // ================= ข่าว 4 =================
      {
        title: "คณะวิศวฯ สจล. ขอแสดงความยินดีกับ ศ.ดร.อภิรัฐ ศิริธราธิวัตร คว้ารางวัลนักวิจัยดีเด่นแห่งชาติ ประจำปี 2569",
        excerpt: "ความภาคภูมิใจสูงสุดแห่งวิศวฯ ลาดกระบัง เชิดชูเกียรตินักวิจัยผู้สร้างสรรค์นวัตกรรมแห่งอนาคต",

        full_content: [
          {
            type: "paragraph",
            children: [{
              type: "text",
              text: "คณะวิศวกรรมศาสตร์ สจล. ขอแสดงความยินดีแก่ ศาสตราจารย์ ดร.อภิรัฐ ศิริธราธิวัตร ที่ได้รับรางวัลนักวิจัยดีเด่นแห่งชาติ ประจำปี 2569 จากสำนักงานการวิจัยแห่งชาติ (วช.)"
            }]
          },
          {
            type: "list",
            format: "unordered",
            children: [
              { type: "list-item", children: [{ type: "text", text: "อุตสาหกรรมฮาร์ดดิสก์ไดรฟ์" }] },
              { type: "list-item", children: [{ type: "text", text: "อุตสาหกรรมการเกษตร" }] },
              { type: "list-item", children: [{ type: "text", text: "เครื่องจักรกลไฟฟ้า" }] },
              { type: "list-item", children: [{ type: "text", text: "ระบบไฟฟ้ากำลัง" }] },
              { type: "list-item", children: [{ type: "text", text: "นวัตกรรมด้านสุขภาพ" }] },
              { type: "list-item", children: [{ type: "text", text: "เทคโนโลยี AI" }] }
            ]
          }
        ],
        date: new Date(),
      }

    ];

    for (const info of informations) {
      await strapi.entityService.create(
        'api::information.information',
        {
          data: {
            ...info,
            publishedAt: new Date(),
          },
        }
      );

      console.log(`✅ Created information: ${info.title}`);
    }

    console.log("🎉 Information seeding complete");

  } catch (err) {
    console.error("❌ Information Seed Error:", err);
  }
};