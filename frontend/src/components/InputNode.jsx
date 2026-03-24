import { Handle, Position } from '@xyflow/react'

function InputNode({ data }) {
    return (
        <div style={{ padding: '10px', border: '1px solid #777', borderRadius: '8px', background: '#1e1e1e', color: 'white', width: '250px' }}>
            <p style={{ marginBottom: '8px', fontWeight: 'bold' }}>Your Prompt</p>
            <textarea
                rows={4}
                style={{ width: '100%', background: '#2e2e2e', color: 'white', border: '1px solid #555', borderRadius: '4px', padding: '6px' }}
                placeholder="Type your prompt here..."
                value={data.prompt}
                onChange={(e) => data.onChange(e.target.value)}
            />
            <Handle type="source" position={Position.Right} />
        </div>
    )
}

export default InputNode