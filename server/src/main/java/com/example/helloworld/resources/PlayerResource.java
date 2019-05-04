package com.example.helloworld.resources;

import com.codahale.metrics.annotation.Timed;
import com.example.helloworld.db.PlayerDAO;
import org.hibernate.SessionFactory;
import com.example.helloworld.core.Player;

import io.dropwizard.hibernate.UnitOfWork;
import io.dropwizard.jersey.caching.CacheControl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;

@Path("/players")
@Produces(MediaType.APPLICATION_JSON)
public class PlayerResource {
    private static final Logger LOGGER = LoggerFactory.getLogger(PlayerResource.class);

    private final PlayerDAO dao;

    public PlayerResource(PlayerDAO dao) {
        this.dao = dao;
    }

    //@GET
    //@Path{"/{id}"}
    //@Timed
    //@UnitOfWork
    //public Optional<Player> findById(@PathParam("id") LongParam id) {
    //    return dao.findById(id.get());
    //}

    @GET
    @Timed
    @UnitOfWork
    public List<Player> findAll() {
        System.out.println("HERE");
        return dao.findAll();
    }
}
