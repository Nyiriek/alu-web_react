export interface MajorCredits {
    credits: number;
    major: string;
}


export interface MinorCredits {
    credits: number;
    minor: string;
}


export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        major: 'Computer Science'
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        minor: 'Math'
    };
}