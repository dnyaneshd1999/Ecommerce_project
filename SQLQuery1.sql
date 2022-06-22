/****** Script for SelectTopNRows command from SSMS  ******/
SELECT TOP (1000) [id]
      ,[UserName]
      ,[Password]
      ,[IsAdmin]
  FROM [EcommerceDB].[dbo].[tblLogin]

    delete from tblLogin where id=1004;