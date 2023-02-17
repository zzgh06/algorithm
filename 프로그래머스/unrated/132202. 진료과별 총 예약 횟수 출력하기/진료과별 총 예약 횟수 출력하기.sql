-- 코드를 입력하세요
SELECT MCDP_CD AS '진료과 코드', COUNT(APNT_YMD) AS '5월 예약건수'
FROM APPOINTMENT
WHERE APNT_YMD LIKE '2022-05%'
GROUP BY MCDP_CD
ORDER BY COUNT(APNT_YMD), MCDP_CD;
