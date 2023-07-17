# average
company = {
    'employees': {
        'John': {'age': 35, 'job_title': 'Manager'},
        'Emma': {'age': 28, 'job_title': 'Software Engineer'},
        'Kelly': {'age': 41, 'job_title': 'Senior Developer'},
        'Sam': {'age': 30, 'job_title': 'Software Engineer'},
        'Mark': {'age': 37, 'job_title': 'Senior Manager'},
        'Sara': {'age': 32, 'job_title': 'Software Engineer'},
    }
}
def average_age_of_employees_with_s_job_title(company):
    # for i in compan[employees]:
    print(company.employees)
    #  return (company)
average_age_of_employees_with_s_job_title(company)
# print(average_age_of_employees_with_s_job_title(company))  # 31.0


# <not completed>




# palindrome
n=121
temp=n
res=0
while(n>0):
    last=n%10
    res=res*10+last
    n=n//10
if(temp==res):
 print(True)
else:
 print(False)