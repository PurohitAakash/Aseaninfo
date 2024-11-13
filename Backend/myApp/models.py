from django.db import models


class CrawlData(models.Model):
    carrier = models.CharField(max_length=100000)
    active = models.IntegerField(null=True)
    lastrun = models.DecimalField(null=False, blank=False,decimal_places=1,max_digits=10000)
    duration = models.DecimalField(null=True, blank=True,decimal_places=3,max_digits=10000)
    success = models.IntegerField(null=True,blank=True)
    success_rate = models.DecimalField(null=True,blank=True,decimal_places=3,max_digits=10000)
    rnf = models.IntegerField(null=True, blank=True)
    rnf_rate = models.DecimalField(null=True , blank=True,decimal_places=3,max_digits=1000)
    fail = models.IntegerField(default=0)
    fail_perc = models.DecimalField(null=True , default=0,decimal_places=3,max_digits=10000)
    crawlfrequency = models.IntegerField(null=True, blank=True)
    durationtolaunch = models.IntegerField(null=True, blank=True)
    starttime = models.DecimalField(null=True, blank=True,decimal_places=2,max_digits=10000)
    endtime = models.DecimalField(null=True, blank=True,decimal_places=2,max_digits=10000)
    

    def __str__(self):
        return self.carrier


    
    
