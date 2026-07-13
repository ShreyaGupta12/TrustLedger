from sqlalchemy import Column, Integer, String
from app.core.database import Base

class Business(Base):
    __tablename__ = "businesses"

    id = Column(Integer, primary_key=True, index=True)
    business_name = Column(String, nullable=False)
    owner_name = Column(String)
    industry = Column(String)
    state = Column(String)
