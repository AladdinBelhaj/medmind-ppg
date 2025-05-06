from django.db import models
from django.contrib.auth.models import User

# Create your models here.
from django.db import models


class Symptom(models.Model):
    description = models.CharField(max_length=255)
    intensite = models.CharField(max_length=50)

class Analyse(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    date = models.DateTimeField()
    symptomes = models.ManyToManyField(Symptom, related_name='analyses')
    resultats = models.JSONField()

    def decrire(self):
        return f"Analyse {self.id} du {self.date}"

class Historique(models.Model):
    utilisateur = models.OneToOneField(User, on_delete=models.CASCADE, related_name='historique')
    analyses = models.ManyToManyField(Analyse, related_name='historiques')

    def afficherChronologie(self):
        return self.analyses.order_by('-date')

class Conseil(models.Model):
    texte = models.TextField()
    liensUtiles = models.JSONField()

class Alerte(models.Model):
    type = models.CharField(max_length=100)
    urgence = models.BooleanField(default=False)

    def afficherBandeauRouge(self):
        if self.urgence:
            return "Alerte urgente !"
        return "Alerte"