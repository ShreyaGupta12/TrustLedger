from fastapi import APIRouter

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/")
def get_dashboard():
    return {
        "trust_score": 89,
        "loan_amount": "15L",
        "confidence": 93,
        "risk": "Low Risk",
        "status": "Credit Ready",
        "radar": [
            {"subject": "GST", "value": 96},
            {"subject": "UPI", "value": 91},
            {"subject": "AA", "value": 88},
            {"subject": "EPFO", "value": 94},
            {"subject": "Growth", "value": 92},
            {"subject": "Liquidity", "value": 84}
        ]
    }
