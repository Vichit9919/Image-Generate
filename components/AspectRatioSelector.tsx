
import React from 'react';
import { AspectRatio, aspectRatios } from '../types';

interface AspectRatioSelectorProps {
    selected: AspectRatio;
    onSelect: (ratio: AspectRatio) => void;
}

const AspectRatioIcon: React.FC<{ ratio: AspectRatio }> = ({ ratio }) => {
    const style: React.CSSProperties = {
        '16:9': { width: '2rem', height: '1.125rem' },
        '9:16': { width: '1.125rem', height: '2rem' },
        '4:3': { width: '2rem', height: '1.5rem' },
        '3:4': { width: '1.5rem', height: '2rem' },
        '1:1': { width: '1.5rem', height: '1.5rem' },
    }[ratio];

    return (
        <div className="flex flex-col items-center justify-center space-y-1">
             <div className="flex items-center justify-center bg-slate-600 rounded-sm transition-colors group-hover:bg-slate-500" style={style}>
             </div>
             <span className="text-xs text-slate-400">{ratio}</span>
        </div>
    );
};


const AspectRatioSelector: React.FC<AspectRatioSelectorProps> = ({ selected, onSelect }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Aspect Ratio</label>
            <div className="grid grid-cols-5 gap-2">
                {aspectRatios.map((ratio) => (
                    <button
                        key={ratio}
                        type="button"
                        onClick={() => onSelect(ratio)}
                        className={`group p-2 rounded-lg border-2 transition-all duration-200 ease-in-out
                            ${selected === ratio ? 'border-cyan-400 bg-cyan-900/50' : 'border-slate-600 bg-slate-700/50 hover:border-slate-500'}`}
                    >
                       <AspectRatioIcon ratio={ratio} />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AspectRatioSelector;
