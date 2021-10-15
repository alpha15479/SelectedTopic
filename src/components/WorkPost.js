/* eslint-disable jsx-a11y/alt-text */
import './WorkPost.css'

function WorkPost(props) {
  const { work, onBgClick } = props

  return (
    <body>
      <div
        className='work-post'
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          backgroundColor: '#455a64'
        }}
      >
        <div className='work-post-bg'>
          <div className='work-post-content'>
            <img src={work.fullUrl} onClick={onBgClick} />
            <br />
            <br />
            <h3>{work.title}</h3>
          </div>
        </div>
        <div className='work-post-content-right'>
          <h2>สกิลที่ต้องมี : {work.skill}</h2><br />
          <h2>ประสบการณ์ : {work.experience}</h2><br />
          <h2>รับจำนวน : {work.amount}</h2><br />
          <h2>เพศ : {work.genders}</h2><br />
          <h2>เงินเดือนเริ่มต้น : {work.salary}</h2><br />
          <h2>สมัครก่อนวันที่ : {work.apply}</h2><br />
        </div>
      </div>
    </body>
  )
}

export default WorkPost
