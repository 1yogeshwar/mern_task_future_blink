import { Handle, Position } from '@xyflow/react'

function ResultNode({ data }) {
    return (
        <div style={{ padding: '10px', border: '1px solid #777', borderRadius: '8px', background: '#1e1e1e', color: 'white', width: '250px' }}>
            <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>AI Response</p>
            <div style={{ minHeight: '80px', background: '#2e2e2e', border: '1px solid #555', borderRadius: '4px', padding: '6px', whiteSpace: 'pre-wrap' }}>
                {data.answer || 'Answer will appear here...'}
            </div>
            <Handle type="target" position={Position.Left} />
        </div>
    )
}

export default ResultNode