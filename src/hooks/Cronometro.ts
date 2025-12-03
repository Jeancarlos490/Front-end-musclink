import { useState, useRef, useEffect } from 'react';

export function Cronometro(){
    
    const [tempo, setTempo] = useState(0); // tempo em segundos
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    
    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setTempo(prev => prev + 1);
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        }
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isRunning]);
    
    const formatarTempo = (totalSegundos: number): string => {
        const horas = Math.floor(totalSegundos / 3600);
        const minutos = Math.floor((totalSegundos % 3600) / 60);
        const segundos = totalSegundos % 60;
        
        return [horas, minutos, segundos]
        .map(val => val.toString().padStart(2, '0'))
        .join(':');
    };
    
    const iniciarPausar = () => {
        setIsRunning(!isRunning);
    };
    
    const resetar = () => {
        setIsRunning(false);
        setTempo(0);
    };
 {
    return { tempo, isRunning, iniciarPausar, resetar, formatarTempo, useState, useEffect}
}   
}