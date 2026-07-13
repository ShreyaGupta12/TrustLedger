from fastapi import APIRouter
import random

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])


@router.get("/")
def get_dashboard():

    trust_score = random.randint(82, 96)
    confidence = random.randint(91, 99)

    loan = random.choice([
        "₹8L",
        "₹10L",
        "₹12L",
        "₹15L",
        "₹18L",
        "₹20L",
        "₹25L",
    ])

    radar = [
        {"subject": "GST", "value": random.randint(84, 99)},
        {"subject": "UPI", "value": random.randint(82, 98)},
        {"subject": "AA", "value": random.randint(80, 98)},
        {"subject": "EPFO", "value": random.randint(85, 99)},
        {"subject": "Growth", "value": random.randint(80, 97)},
        {"subject": "Liquidity", "value": random.randint(75, 94)},
    ]

    if trust_score >= 90:
        risk = "Low Risk"
        status = "Loan Approved"

        positives = [
            "Excellent GST compliance",
            "Strong digital transaction history",
            "Healthy monthly cash flow"
        ]

        concern = "Minor liquidity fluctuation"

    elif trust_score >= 85:
        risk = "Medium Risk"
        status = "Needs Manual Review"

        positives = [
            "Consistent revenue growth",
            "Regular GST filing",
            "Stable UPI transactions"
        ]

        concern = "Moderate working capital"

    else:
        risk = "High Risk"
        status = "Currently Not Eligible"

        positives = [
            "Business is operational",
            "Digital payment adoption",
            "Basic compliance maintained"
        ]

        concern = "Irregular cash flow"

    return {
        "trust_score": trust_score,
        "loan_amount": loan,
        "confidence": confidence,
        "risk": risk,
        "status": status,
        "radar": radar,
        "positives": positives,
        "concern": concern
    }