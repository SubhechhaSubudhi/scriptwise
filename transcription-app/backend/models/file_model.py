from sqlalchemy import Column, Integer, String
from database import Base

class FileModel(Base):
    __tablename__ = 'files'
    id = Column(Integer, primary_key=True)
    filename = Column(String(100), unique=True, nullable=False)
    # Add more fields as required
