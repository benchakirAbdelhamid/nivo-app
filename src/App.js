import { ResponsivePie } from '@nivo/pie'
import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
const [number , setNumber] = useState(360)


  const  dataFake = [
[
    {
    "id": "parzialmente Implementato",
    "label": "parzialmente Implementato",
    "value": 70,
  },
  {
    "id": "Non Implementato",
    "label": "Non Implementato",
    "value": 50,
  },
  {
    "id": "Implementato",
    "label": "Implementato",
    "value": 60,
  }
],
[
    {
        "id": "parzialmente Implementato",
        "label": "parzialmente Implementato",
        "value": 50,
        'ds':50
      },
      {
        "id": "Non Implementato",
        "label": "Non Implementato",
        "value": 40,
      },
      {
        "id": "Implementato",
        "label": "Implementato",
        "value": 10,
      }
],
[
    {
        "id": "parzialmente Implementato",
        "label": "parzialmente Implementato",
        "value": 22,
      },
      {
        "id": "Non Implementato",
        "label": "Non Implementato",
        "value": 5,
      },
      {
        "id": "Implementato",
        "label": "Implementato",
        "value": 9,
      }
]]

const dataFakeValue=[20 , 52 , 70]



useEffect(()=>{
    setTimeout(()=>{
        setNumber(0)
    },100)
})

return (
    <div  style={{width:'400px' , height:'400px' }} >

        

    {dataFakeValue.map(d=>{
        return <div>
            {d}
        </div>
    })}
    {dataFake.map(x=>{

            return (
                
                
             <ResponsivePie
              data={x}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.7}
        startAngle={number}
        padAngle={2}
        colors={{ scheme: 'dark2' }}
        borderColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.2
                ]
            ]
        }}
        enableArcLinkLabels={false}
        arcLinkLabelsSkipAngle={2}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        arcLinkLabelsOffset={-7}
        arcLinkLabelsDiagonalLength={18}
        arcLinkLabelsStraightLength={23}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [] }}
        enableArcLabels={false}
        arcLabelsRadiusOffset={0.45}
        arcLabelsSkipAngle={8}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    '1.7'
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 5000,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }
               ]}
             />
            )
           
    })}

    </div>
  );
}

export default App;


