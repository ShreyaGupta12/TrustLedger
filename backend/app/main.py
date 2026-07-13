from fastapi import FastAPI
from app.core.database import Base, engine
from app.routers.health import router as health_router
from app.routers.dashboard import router as dashboard_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="TrustLedger API",
    version="1.0.0"
)

app.include_router(health_router)
app.include_router(dashboard_router)


@app.get("/")
def root():
    return {"message": "TrustLedger API is running"}