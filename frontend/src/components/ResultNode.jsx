import { Handle, Position } from '@xyflow/react'
import ReactMarkdown from 'react-markdown'

function ResultNode({ data }) {
    return (
        <div style={{ padding: '10px', border: '1px solid #777', borderRadius: '8px', background: '#1e1e1e', color: 'white', width: '250px' }}>
            <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>AI Response</p>
          <ReactMarkdown>{data.answer || 'Answer will appear here...'}</ReactMarkdown>
            <Handle type="target" position={Position.Left} />
        </div>
    )
}

export default ResultNode