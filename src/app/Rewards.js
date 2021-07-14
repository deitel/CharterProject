
import './Rewards.css';

const Rewards = ({transactions}) => {

    const rewards = transactions.reduce((ttl, next)=>{
        console.log(next)
        if (next.amount > 100) {
            const cnt = next.amount - 100;
            ttl = ttl + 50 + Math.floor(cnt*2)
        } else if (next.amount > 50) {
            const cnt = next.amount - 50;
            ttl = ttl + Math.floor(cnt)
        }
        return ttl;
    }, 0)

    return (
        <section className='Rewards-content'>
            <span className='Rewards-label'>Total Rewards:</span>
            <span className='Rewards-value'>{rewards}</span>
        </section>
    );
}

export default Rewards;