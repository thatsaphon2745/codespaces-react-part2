import { useRef, useState} from 'react'
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [Bmi,setBmi] = useState(0.00);
    const BmiText=({bmi})=>{
        if(bmi<18.5)
            return (<h3>UnderWeight</h3>)
        else if(bmi>30)
            return (<h3>OverWeight</h3>)
        else
            return (<h3>Normal</h3>)
    }
    const calBmi=()=>{
        let w=W_input.current.value
        let h=H_input.current.value/100;
        // ตรวจสอบการป้อนข้อมูล
        if (!w || !h) {
            alert("กรุณาป้อนน้ำหนักและความสูง");
            return;
        }

        // ตรวจสอบค่าที่ป้อนเข้า
        if (w < 0 || h < 0) {
            alert("น้ำหนักและความสูงต้องไม่เป็นลบ");
            return;
        }
        setBmi(w/Math.pow(h,2))
    }
    
    return (
    <>
        <h2>BMI Calculator</h2>
        Weight: <input
        type="number" 
        ref={W_input}
        min="0" 
        step="0.1" 
        /> kg.<br/>
        Height: <input
        type="number" 
        ref={H_input}
        min="0" 
        step="0.1"
        /> cm.<br/> 
        <button onClick={calBmi}>calculate</button><br/>
        Bmi Value: {Bmi.toFixed(2)}
        <BmiText bmi={Bmi}/>
    </>);
}