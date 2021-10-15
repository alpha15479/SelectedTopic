/* eslint-disable jsx-a11y/alt-text */
import './Content.css'

function WorkItem(props) {
    const { work } = props
    return (
        <div className='col'>
            <div className='col pics'>
                <img src={work.thumbnailUrl} />
            </div>
            <div className='col name'>
                <h4>{work.title}</h4>
            </div>
            <div className='col desc'>
                <h4>
                &nbsp;&nbsp;- {work.skill} <br />
                &nbsp;&nbsp;- {work.experience} <br />
                &nbsp;&nbsp;- จำนวน {work.amount} <br />
                &nbsp;&nbsp;- {work.genders} <br />
                &nbsp;&nbsp;- เงินเดือน {work.salary} <br />
                &nbsp;&nbsp;- สมัครก่อนวันที่ {work.apply}
                </h4>
            </div>
        </div>
    )
}

export default WorkItem
