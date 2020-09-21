import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
                <p>밑에는 아직 구현 안함!!</p>
                <Icon type="smile" />
        </div>
    )
}

export default Footer
