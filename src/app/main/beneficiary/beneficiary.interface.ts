export interface Beneficiary {
    bankDetails: {
        accountNo: string;
        bankName: string;
        bankAddress: string;
        area: string;
        city: string;
        bic: string;
        clearingCode: string;
        isLocal: boolean;
        type: string;
        country: string;
    },
    beneficiaryDetails: {
        name: string;
        nickName: string;
        address1: string;
        address2: string;
        area: string;
        country: string;
        transferLimitWeb:{
            min: number, 
            max: number
        },
        transferLimitMobile: {
            min: number, 
            max:number
        }
    }

    

  };