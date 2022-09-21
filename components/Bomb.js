import bomb from '../utils/bomb';
import { useEffect } from 'react'

export default function Bomb({ type }) {
    useEffect(() => {
        switch (type.type) {
            case 'cannon':
                bomb.cannon();
                break;
            case 'continuous':
                bomb.continuous();
                break;
            case 'fireworks':
                bomb.fireworks();
                break;
            case 'snow':
                bomb.snow();
                break;
        }
    }, [type])
    return ""
}